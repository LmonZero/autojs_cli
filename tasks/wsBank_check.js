const autojsUtils = require('../modules/autojs-utils');
autojsUtils.auth()

const appName = 'com.mybank.android.phone'

const itemName = '获取福利金'

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
    sleep(1000 * 10)

    // let myBton = text('我的').findOne(2000)

    // if (!myBton) {
    //     console.log('未找到我的按钮')
    //     return code
    // }
    // let mxy = myBton.center()
    // click(mxy.x, mxy.y)
    // sleep(1000 * 2)
    // click(mxy.x, mxy.y)
    // sleep(1000 * 2)

    let myWelfare = text('网商银行').findOne(2000).parent().brother(1).child(0).child(0).child(0).child(0).child(2)
    if (!myWelfare) {
        console.log('未找到我的福利')
        return code
    }

    let xy = myWelfare.center()
    click(xy.x, xy.y)
    sleep(5 * 1000)
    let welfare = text('福利金特权').findOne(2000)
    if (!welfare) {
        console.log('未找到福利金特权')
        return code
    }
    text('福利金特权').findOne(2000).parent().brother(3).click()
    sleep(5 * 1000)

    if (!text('福利金余额').findOne(5000)) {
        console.log('未找到福利金余额')
        return code
    }

    if (text('V2签到').findOne(2000)) {
        let xy = text('V2签到').findOne(2000).center()
        click(xy.x, xy.y)
    }
    sleep(2 * 1000)
    if (text('余利宝有钱').findOne(2000)) {
        let xy = text('余利宝有钱').findOne(2000).center()
        click(xy.x, xy.y)
    }
    sleep(2 * 1000)

    if (text('返利卡').findOne(2000)) {
        let xy = text('返利卡').findOne(2000).center()
        click(xy.x, xy.y)
    }
    sleep(2 * 1000)

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
        autojsUtils.showMem()
        for (let index = 0; index < 3; index++) {
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