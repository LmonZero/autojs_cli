const autojsUtils = require('../modules/autojs-utils');
autojsUtils.auth()

const appName = 'com.smzdm.client.android'

const itemName = '什么值得买签到'

if (!auto.service) {
    console.log('无无障碍权限')
    auto.waitFor()
}
if (!autojsUtils.checkMiuiPermission(10021)) {
    console.log('缺少弹窗权限');
}

// 获取屏幕宽度和高度
var width = device.width;
var height = device.height;

// 输出屏幕分辨率
console.log("屏幕宽度: " + width + "，屏幕高度: " + height);

function task() {
    let code = 0
    console.log(`开始执行${itemName}任务`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 5)
    console.log('打开app')
    if (!launch(appName)) {
        console.log(appName, '启动失败')
        return code
    }
    sleep(1000 * 8)

    back();
    sleep(1000 * 1)

    let my = text('我的').findOne(2000)
    if (!my) {
        console.log('没有找到<我的>')
        return code
    }

    let xy = my.center()
    click(xy.x, xy.y)
    sleep(1000 * 3)

    let sign = id('v_container_login_not_sign_animation').findOne(2000)
    if (!sign) {
        console.log('没有找到<签到>')
        return code
    }
    let xy2 = sign.center()
    click(xy2.x, xy2.y)

    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

module.exports = () => {
    let flag = false
    try {
        flag = autojsUtils.unlock('lmon.com')
        for (let index = 0; index < 2; index++) {
            console.log('执行第', index + 1, '次')
            let code = task()
            if (code == 0) {
                autojsUtils.close(appName)
                console.log(`${itemName}任务执行失败,再次执行`)
            } else {
                break
            }
        }
    } catch (error) {
        console.error('catch====', error)
    } finally {
        if (flag) {

        }
    }
}