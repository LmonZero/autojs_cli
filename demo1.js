const autojsUtils = require('./modules/autojs-utils');

autojsUtils.auth();

//打开弹窗
//日志展示
//脚本的启动、关闭
let appName = 'com.taobao.taobao'
console.log('打开app', appName, launchPackage('appName'))
// setTimeout(() => { //pass
//     console.log('关闭app', appName, shell(`am force-stop ${appName}`))
// }, 1 * 1000)

exit();