var Components = require('../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');
var endOfLine = require('os').EOL;

var OUTPUT_PATH = path.join(__dirname, '../src/index.js');
var IMPORT_TEMPLATE = 'import {{name}} from \'./components/{{package}}/index.js\';';
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
var MAIN_TEMPLATE = `/* Automatically generated by './build/build-entry.js' */

{{include}}
import locale from 'pyff-vue/src/common/locale';
import CollapseTransition from 'pyff-vue/src/common/transitions/collapse-transition';

const components = [
{{install}},
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading.directive);

  const PYFF = {};
  PYFF.size = opts.size || '';

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

  Vue.prototype.$PYFF = PYFF;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '{{version}}',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
{{list}}
};

module.exports.default = module.exports;
`;

delete Components.font;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }));

  if (['Loading', 'MessageBox', 'Notification', 'Message'].indexOf(componentName) === -1) {
    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }));
  }

  if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join(',' + endOfLine),
  version: process.env.VERSION || require('../package.json').version,
  list: listTemplate.join(',' + endOfLine)
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);

