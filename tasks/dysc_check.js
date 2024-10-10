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

function dyGuangao(times) {
    console.log('开始抖音广告')
    sleep(2000)
    for (let i = 0; i < times; i++) {
        console.log('第' + (i + 1) + '次')
        sleep(1000 * 5)
        if (text('广告').findOne(1000)) {
            console.log('广告进入成功')
        }
        sleep(1000 * 30)
        back();
        sleep(1000 * 2)
        if (text('继续领奖励').findOne(1000)) {
            console.log('继续领奖励')
            let xy = text('继续领奖励').findOne(1000).center()
            click(xy.x, xy.y)
            sleep(1000 * 2)
        } else {
            console.log('无法继续看视频')
            break;
        }
    }

    if (text('坚持退出').findOne(1000)) {
        console.log('坚持退出')
        text('坚持退出').findOne(1000).click()
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


    if (text('立即签到').findOne(1000)) {
        let xy = text('立即签到').findOne().center()
        console.log('1点击立即签到', xy)
        click(xy.x, xy.y)
        sleep(1000 * 2)
        img = autojsUtils.capScreen()
        let small_shiping = images.read('./png/dy_shiping_again.jpg')
        let shiping_in = autojsUtils.getPngCenter(small_shiping, img)
        small_shiping.recycle()
        if (shiping_in) {
            console.log('点击继续观看')
            click(shiping_in[0], shiping_in[1])
            dyGuangao(5)
        }
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
    if (!text('我的金币').findOne(1000)) {
        console.log('不在签到界面')
        return code
    }

    //dy_ck3.jpg 去签到
    console.log('去签到')
    img = autojsUtils.capScreen()
    let small = images.read('./png/dy_ck3.jpg')
    let task_png = autojsUtils.getPngCenter(small, img)
    small.recycle()
    if (task_png) {
        click(task_png[0], task_png[1])
        sleep(1000 * 3)
        if (text('立即签到').findOne(1000)) {
            let xy = text('立即签到').findOne().center()
            console.log('点击立即签到', xy)
            click(xy.x, xy.y)
            sleep(1000 * 2)
            img = autojsUtils.capScreen()
            let small_shiping = images.read('./png/dy_shiping_again.jpg')
            let shiping_in = autojsUtils.getPngCenter(small_shiping, img)
            small_shiping.recycle()
            if (shiping_in) {
                console.log('点击继续观看')
                click(shiping_in[0], shiping_in[1])
                dyGuangao(5)
            }
        }

        console.log('检查是否在签到界面')
        if (!text('我的金币').findOne(1000)) {
            console.log('不在签到界面')
            return code
        }

    } else {
        //dy_ck8.jpg
        console.log('查看连续签到，看广告')
        img = autojsUtils.capScreen()
        small = images.read('./png/dy_ck8.jpg')
        task_png = autojsUtils.getPngCenter(small, img)
        small.recycle()

        if (task_png) {
            // dy_ck9.jpg
            console.log('点击连续签到', click(task_png[0], task_png[1]))
            sleep
            img = autojsUtils.capScreen()
            small = images.read('./png/dy_ck9.jpg')
            task_png = autojsUtils.getPngCenter(small, img)
            small.recycle()
            if (task_png) {
                console.log('点击看广告', click(task_png[0], task_png[1]))
                sleep(1000 * 2)
                dyGuangao(5)
            }


        }
    }

    console.log('收金币')
    img = autojsUtils.capScreen()
    small = images.read('./png/dy_ck2.jpg') //用抽奖图片确定y
    task_png = autojsUtils.getPngCenter(small, img)
    small.recycle()
    if (task_png) {
        console.log('点击收金币')
        click(Math.ceil(width / 2), task_png[1])
        sleep(1000 * 2)

        if (text('我知道了').findOne(1000)) {
            console.log('点击我知道了')
            text('我知道了').findOne(1000).click()
        } else {
            img = autojsUtils.capScreen()
            let small_shiping = images.read('./png/dy_shiping_again.jpg')
            let shiping_in = autojsUtils.getPngCenter(small_shiping, img)
            small_shiping.recycle()
            if (shiping_in) {
                console.log('点击继续观看')
                click(shiping_in[0], shiping_in[1])
                dyGuangao(5)
            }
        }

        console.log('检查是否在签到界面')
        if (!text('我的金币').findOne(1000)) {
            console.log('不在签到界面')
            return code
        }
    }

    console.log('去抽奖')
    img = autojsUtils.capScreen()
    small = images.read('./png/dy_ck2.jpg')
    task_png = autojsUtils.getPngCenter(small, img)
    small.recycle()
    if (task_png) {
        console.log('点击去抽奖')
        click(task_png[0], task_png[1])
        sleep(1000 * 2)
        img = autojsUtils.capScreen()
        small = images.read('./png/dy_ck4.jpg')
        task_png = autojsUtils.getPngCenter(small, img, 0.6)
        console.log('检查是否一键抽奖', task_png)

        if (task_png) {
            console.log('点击抽奖')
            click(task_png[0], task_png[1])
            sleep(1000 * 2)
        }

        // 
        img = autojsUtils.capScreen()
        small = images.read('./png/dy_ck5.jpg')
        task_png = autojsUtils.getPngCenter(small, img, 0.6)
        console.log('检查是否在立即抽奖', task_png)
        if (task_png) {
            console.log('点击立即抽奖')
            click(task_png[0], task_png[1])
            sleep(1000 * 2)
        }

    }

    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function shipingTask() {
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
    if (!text('我的金币').findOne(1000)) {
        console.log('不在签到界面')
        return code
    }

    console.log('看广告视频')
    img = autojsUtils.capScreen()
    let small = images.read('./png/dy_ck7.jpg')
    let task_png = autojsUtils.getPngCenter(small, img)
    small.recycle()
    if (task_png) {
        click(task_png[0], task_png[1])
        sleep(1000 * 3)
        dyGuangao(5)
    }

    console.log('看视频')

    if (text('看视频赚金币').findOne(2000)) {
        let xy = text('看视频赚金币').findOne(2000).center()
        click(xy.x, xy.y)
        sleep(1000 * 2)
        if (text('推荐').findOne(1000)) {
            console.log('进入推荐视频界面')


            for (let i = 0; i < 3; i++) {
                console.log(i, '滑动,休息30s')
                swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 500, Math.ceil(width / 2), Math.ceil(height / 2) - 300, 600)
                sleep(1000 * 20)
                let delay = Math.ceil(Math.random() * 20)
                console.log('随机', delay)
                sleep(1000 * delay)
            }

        }
    }


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
        autojsUtils.showMem()
        for (let index = 0; index < 3; index++) {
            console.log('执行1第', index + 1, '次')
            let code = task()
            if (code == 0) {
                autojsUtils.close(appName)
                console.log(`${itemName}任务执行失败,再次执行`)
            } else {
                break
            }
        }

        for (let index = 0; index < 3; index++) {
            console.log('执行2第', index + 1, '次')
            let code = shipingTask()
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