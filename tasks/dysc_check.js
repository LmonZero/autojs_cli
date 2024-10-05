const autojsUtils = require('../modules/autojs-utils');
autojsUtils.auth()

const appName = 'com.ss.android.ugc.livelite'

const itemName = '抖音商城签到'

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
    back()
    sleep(1000 * 2)

    if (text('以后再说').findOne(2000)) {
        console.log('点击以后再说')
        text('以后再说').findOne(2000).click()
        sleep(1000 * 2)
    }


    let ck = text('视频').findOne(2000)
    if (!ck) {
        console.log('找不到签到入口')
        return code
    }

    let xy = ck.parent().parent().parent().parent().parent().parent().parent().child(2).center()
    console.log('点击入口', xy)
    click(xy.x, xy.y)
    sleep(5 * 1000)

    console.log('检查是否在签到界面')
    let img = autojsUtils.capScreen()
    let small_exit = images.read('./png/dy_ck_exit.jpg')
    let exit_in = autojsUtils.getPngCenter(small_exit, img)
    small_exit.recycle()
    console.log('检查是否在签到界面', exit_in)
    if (!exit_in) {
        console.log('不在签到界面')
        return code
    }

    console.log('收金币')
    img = autojsUtils.capScreen()
    let small = images.read('./png/dy_ck1.jpg')
    let task_png = autojsUtils.getPngCenter(small, img)
    task_png.recycle()
    if (task_png) {
        click(task_png[0], task_png[1])
        sleep(1000 * 2)
    }

    //dy_ck3.jpg 去签到
    img = autojsUtils.capScreen()
    small = images.read('./png/dy_ck3.jpg')
    task_png = autojsUtils.getPngCenter(small, img)
    task_png.recycle()
    if (task_png) {
        click(task_png[0], task_png[1])
        sleep(1000 * 2)
    }


    sleep(1000 * 20)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

module.exports = () => {
    let flag = false
    try {
        flag = autojsUtils.unlock('lmon.com')

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