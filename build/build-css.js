var chalk = require('chalk')
var ora = require('ora')
var shell = require('shelljs')
var child_process = require('child_process')

module.exports = function () {
  if (shell.which('gulp')) {//判断当前环境是否有安装gulp
    var spinner = ora('building for style...')
    spinner.start()
    console.log("")
    var childProcess=child_process.execSync("cd src/styles/theme-default/ && npm run build");
    console.log(childProcess.toString())
    console.log(chalk.green("build style success"))
    spinner.stop()
  }else{
    console.log("请执行 npm install -g gulp 来安装gulp");
  }
}
