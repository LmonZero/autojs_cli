const autojsUtils = require('../modules/autojs-utils');
autojsUtils.auth()

const appName = 'com.ss.android.ugc.aweme'

const itemName = '抖音正常版签到'

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


function dyShiping(times) {
    console.log('开始抖音视频')
    sleep(2000)
    for (let i = 0; i < times; i++) {
        console.log(i, '滑动')
        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
        sleep(1000 * 2)
        if (text('点击进入直播间').findOne(2000)) {
            console.log('点击进入直播间,划走哦')
            swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
            sleep(1000 * 2)
        }
        console.log('等待1分钟')
        sleep(1000 * 62 * 1)
        let delay = Math.ceil(Math.random() * 15)
        console.log('随机', delay)
        sleep(1000 * delay)

    }

}

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
    back()
    sleep(1000 * 2)

    if (text('以后再说').findOne(2000)) {
        console.log('点击以后再说')
        text('以后再说').findOne(2000).click()
        sleep(1000 * 2)
    }

    dyShiping(10)

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
        autojsUtils.media(0)

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
        autojsUtils.media(0.2)
    }
}