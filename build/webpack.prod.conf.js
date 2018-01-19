var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var md = require('markdown-it')()
var slugify = require('transliteration').slugify
var striptags = require('./strip-tags')
function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}
var wrap = function(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code v-pre class="', '<code v-pre class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
};
var env = config.build.env
var styleLoaders =  utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
styleLoaders.push({
  test: /\.md$/,
  loader: "vue-markdown-loader",
  options: {
    use: [
      [require('markdown-it-anchor'), {
        level: 2,
        slugify: slugify,
        permalink: true,
        permalinkBefore: true
      }],
      [require('markdown-it-container'), 'demo', {
        validate: function(params) {
          return params.trim().match(/^demo\s*(.*)$/);
        },

        render: function(tokens, idx) {
          var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          if (tokens[idx].nesting === 1) {
            var description = (m && m.length > 1) ? m[1] : '';
            var content = tokens[idx + 1].content;
            var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
            var script = striptags.fetch(content, 'script');
            var style = striptags.fetch(content, 'style');
            var jsfiddle = { html: html, script: script, style: style };
            var descriptionHTML = description
              ? md.render(description)
              : '';

            jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

            return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
          }
          return '</div></demo-block>\n';
        }
      }],
      [require('markdown-it-container'), 'tip'],
      [require('markdown-it-container'), 'warning']
    ],
    preprocess: function(MarkdownIt, source) {
      MarkdownIt.renderer.rules.table_open = function() {
        return '<table class="table">';
      };
      MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
      return source;
    }
  }
})
var webpackConfig = merge.smart(baseWebpackConfig, {
  entry: {
    'pyff-vue': './src/index.js',
    doc: './document/entry.js'
  },
  module: {
    rules: styleLoaders
  },
  // module: {
  //   rules: utils.styleLoaders({
  //     sourceMap: config.build.productionSourceMap,
  //     extract: true
  //   })
  // },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      // filename 生成网页的HTML名字，可以使用/来控制文件文件的目录结构，最
      // 终生成的路径是基于webpack配置的output.path的
      filename: config.build.index,
      template: './document/index.html',
      // inject，指示把加载js文件用的<script>插入到哪里，默认是插到<body>
      // 的末端，如果设置为'head'，则把<script>插入到<head>里。
      inject: true,
      chunks: ['manifest', 'vendor','doc'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // 如果文件是多入口的文件，可能存在，重复代码，把公共代码提取出来，又不会重复下载公共代码了
    // （多个页面间会共享此文件的缓存）
    // CommonsChunkPlugin的初始化常用参数有解析？
    // name: 这个给公共代码的chunk唯一的标识
    // filename，如何命名打包后生产的js文件，也是可以用上[name]、[hash]、[chunkhash]
    // minChunks，公共代码的判断标准：某个js模块被多少个chunk加载了才算是公共代码

    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
