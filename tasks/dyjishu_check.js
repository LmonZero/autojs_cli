const autojsUtils = require('../modules/autojs-utils');



const appName = 'com.ss.android.ugc.aweme.lite'

const itemName = '抖音极速任务'

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
var guangxy = null
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
        sleep(1000 * 15)
        let isOK = false

        if (textStartsWith('首单最高').findOne(1000)) {
            console.log('首单最高')
            let xy = textStartsWith('首单最高').findOne(1000).center()
            click(xy.x, xy.y)
            sleep(1000 * 8)
            isOK = true
        }
        if (textStartsWith('查看详细').findOne(1000)) {
            console.log('查看详细')
            let xy = textStartsWith('查看详细').findOne(1000).center()
            click(xy.x, xy.y)
            sleep(1000 * 8)
            isOK = true
        }

        if (textStartsWith('点击进入').findOne(1000)) {
            console.log('查看详细')
            let xy = textStartsWith('查看详细').findOne(1000).center()
            click(xy.x, xy.y)
            sleep(1000 * 8)
            isOK = true
        }

        if (!isOK && guangxy) {
            console.log('点击通用广告坐标')
            click(guangxy.x, guangxy.y)
            sleep(1000 * 8)
        }
        sleep(1000 * 10)
        if (isOK) {
            let stop = false
            for (let i = 0; i < 5; i++) {
                stop = false
                back();
                sleep(1000 * 2)

                if (text('评价并收下金币').findOne(1000)) {
                    console.log('评价并收下金币')
                    let xy = text('评价并收下金币').findOne(1000).center()
                    click(xy.x, xy.y)
                    sleep(1000 * 2)
                    back();
                    sleep(1000 * 2)
                }

                if (text('继续领奖励').findOne(1000)) {
                    console.log('继续领奖励')
                    let xy = text('继续领奖励').findOne(1000).center()
                    click(xy.x, xy.y)
                    sleep(1000 * 2)
                    break;
                } else {
                    if (text('领取奖励').findOne(1000)) {
                        console.log('领取奖励')
                        let xy = text('领取奖励').findOne(1000).center()
                        click(xy.x, xy.y)
                        sleep(1000 * 2)
                        break;
                    } else {
                        if (text('继续观看').findOne(1000)) {
                            console.log('继续观看')
                            let xy = text('继续观看').findOne(1000).center()
                            click(xy.x, xy.y)
                            break;
                        } else {
                            console.log('无法继续看视频???')
                            true
                        }
                    }
                }
            }

            if (stop) {
                break;
            }

        } else {

            if (text('评价并收下金币').findOne(2000)) {
                console.log('评价并收下金币')
                let xy = text('评价并收下金币').findOne(1000).center()
                click(xy.x, xy.y)
                sleep(1000 * 2)
                back();
                sleep(1000 * 2)
            }

            if (text('继续领奖励').findOne(1000)) {
                console.log('继续领奖励')
                let xy = text('继续领奖励').findOne(1000).center()
                click(xy.x, xy.y)
                sleep(1000 * 2)
            } else {
                if (text('领取奖励').findOne(1000)) {
                    console.log('领取奖励')
                    let xy = text('领取奖励').findOne(1000).center()
                    click(xy.x, xy.y)
                    sleep(1000 * 2)
                } else {
                    if (text('继续观看').findOne(1000)) {
                        console.log('继续观看')
                        let xy = text('继续观看').findOne(1000).center()
                        click(xy.x, xy.y)
                    } else {
                        console.log('无法继续看视频')
                        break;
                    }
                }
            }
        }

    }

    if (text('坚持退出').findOne(1000)) {
        console.log('坚持退出')
        text('坚持退出').findOne(1000).click()
    }

    if (text('放弃奖励').findOne(1000)) {
        console.log('放弃奖励')
        text('放弃奖励').findOne(1000).click()
    }

    sleep(1000 * 2)
    back();
    sleep(1000 * 2)

    if (text('评价并收下金币').findOne(2000)) {
        console.log('评价并收下金币')
        let xy = text('评价并收下金币').findOne(1000).center()
        click(xy.x, xy.y)
        sleep(1000 * 2)
    }

}
function dyShiping(times) {
    console.log('开始抖音视频')
    let time = 10
    sleep(2000)
    for (let i = 0; i < times; i++) {
        console.log(i, '滑动,休息10s')
        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
        if (text('点击进入直播间').findOne(2000)) {
            console.log('点击进入直播间,划走哦')
            swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
        }

        if (text('看本视频').findOne(2000)) {
            console.log('本视频额外奖励，修改滑动3s')
            time = 3
            sleep(1000 * 35)
        } else {
            if (text('回任务页').findOne(1000)) {
                console.log('回到任务页')
                back()
                sleep(1000 * 2)
                break
            } else {
                sleep(1000 * time)
                let delay = Math.ceil(Math.random() * 5)
                console.log('随机', delay)
                sleep(1000 * delay)
            }
        }

    }

}


function task() {
    let code = 0
    console.log(`开始执行${itemName}任务task`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 1)
    console.log('打开app')
    if (!launch(appName)) {
        console.log(appName, '启动失败')
        return code
    }
    sleep(1000 * 8)
    back()
    sleep(1000 * 2)

    if (!text('朋友').findOne(2000)) {
        console.log('朋友按钮不存在')
        return code
    }

    let xy1 = text('朋友').findOne(2000).center()
    let xy2 = text('消息').findOne(2000).center()
    console.log('点击赚钱入口')
    guangxy = { x: xy1.x + Math.ceil((xy2.x - xy1.x) / 2), y: xy1.y }
    click(xy1.x + Math.ceil((xy2.x - xy1.x) / 2), xy1.y)
    sleep(1000 * 8)

    console.log('检查是否进入赚钱入口')
    let img = autojsUtils.capScreen()
    let small = images.read('./png/dyjs_ck_01.jpg')
    let task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()

    if (!task_png) {
        console.log('没有进入，没有找到《赚钱任务》')
        return code
    }

    img = autojsUtils.capScreen()
    small = images.read('./png/dyjs_ck_02.jpg')
    task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()
    if (task_png) {
        console.log('点击签到任务')
        click(task_png[0], task_png[1])
        sleep(1000 * 2)
    } else {
        console.log('没有找到新人签到')
    }


    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function task1() {
    let code = 0
    console.log(`开始执行${itemName}任务task1`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 1)
    console.log('打开app')
    if (!launch(appName)) {
        console.log(appName, '启动失败')
        return code
    }
    sleep(1000 * 8)
    back()
    sleep(1000 * 2)

    if (!text('朋友').findOne(2000)) {
        console.log('朋友按钮不存在')
        return code
    }

    let xy1 = text('朋友').findOne(2000).center()
    let xy2 = text('消息').findOne(2000).center()
    console.log('点击赚钱入口')
    guangxy = { x: xy1.x + Math.ceil((xy2.x - xy1.x) / 2), y: xy1.y }
    click(xy1.x + Math.ceil((xy2.x - xy1.x) / 2), xy1.y)
    sleep(1000 * 8)

    console.log('检查是否进入赚钱入口')
    let img = autojsUtils.capScreen()
    let small = images.read('./png/dyjs_ck_01.jpg')
    let task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()

    if (!task_png) {
        console.log('没有进入，没有找到《赚钱任务》')
        return code
    }

    img = autojsUtils.capScreen()
    small = images.read('./png/dyjs_ck_03.jpg')
    task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()
    if (task_png) {
        console.log('点击新人看视频任务')
        click(task_png[0], task_png[1])
        sleep(1000 * 2)

        dyShiping(15)
    } else {
        console.log('没有找到新人签到')
    }


    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function task2() {
    let code = 0
    console.log(`开始执行${itemName}任务task2`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 1)
    console.log('打开app')
    if (!launch(appName)) {
        console.log(appName, '启动失败')
        return code
    }
    sleep(1000 * 8)
    back()
    sleep(1000 * 2)

    if (!text('朋友').findOne(2000)) {
        console.log('朋友按钮不存在')
        return code
    }

    let xy1 = text('朋友').findOne(2000).center()
    let xy2 = text('消息').findOne(2000).center()
    console.log('点击赚钱入口')
    guangxy = { x: xy1.x + Math.ceil((xy2.x - xy1.x) / 2), y: xy1.y }
    click(xy1.x + Math.ceil((xy2.x - xy1.x) / 2), xy1.y)
    sleep(1000 * 8)

    console.log('检查是否进入赚钱入口')
    let img = autojsUtils.capScreen()
    let small = images.read('./png/dyjs_ck_01.jpg')
    let task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()

    if (!task_png) {
        console.log('没有进入，没有找到《赚钱任务》')
        return code
    }

    img = autojsUtils.capScreen()
    small = images.read('./png/dyjs_ck_04.jpg')
    task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()
    if (task_png) {
        console.log('点击领取宝箱任务')
        click(task_png[0], task_png[1])
        sleep(1000 * 2)

        img = autojsUtils.capScreen()
        small = images.read('./png/dyjs_ck_06.jpg')
        task_png = autojsUtils.getPngCenter(small, img, 0.6)

        if (task_png) {
            console.log('找到宝箱任务')
            click(task_png[0], task_png[1])
            sleep(1000 * 2)
            dyGuangao(10)
        }

    } else {
        console.log('没有找到宝箱任务')
    }


    sleep(1000 * 1)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function task3() {
    let code = 0
    console.log(`开始执行${itemName}任务task3`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 1)
    console.log('打开app')
    if (!launch(appName)) {
        console.log(appName, '启动失败')
        return code
    }
    sleep(1000 * 8)
    back()
    sleep(1000 * 2)

    if (!text('朋友').findOne(2000)) {
        console.log('朋友按钮不存在')
        return code
    }

    let xy1 = text('朋友').findOne(2000).center()
    let xy2 = text('消息').findOne(2000).center()
    console.log('点击赚钱入口')
    guangxy = { x: xy1.x + Math.ceil((xy2.x - xy1.x) / 2), y: xy1.y }
    click(xy1.x + Math.ceil((xy2.x - xy1.x) / 2), xy1.y)
    sleep(1000 * 8)

    console.log('检查是否进入赚钱入口')
    let img = autojsUtils.capScreen()
    let small = images.read('./png/dyjs_ck_01.jpg')
    let task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()

    if (!task_png) {
        console.log('没有进入，没有找到《赚钱任务》')
        return code
    }

    for (let i = 0; i < 5; i++) {
        console.log('查找逛街赚钱', i)
        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 300, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 2000)
        sleep(1000 * 1)
        img = autojsUtils.capScreen()
        small = images.read('./png/dyjs_ck_05.jpg')
        task_png = autojsUtils.getPngCenter(small, img, 0.8)
        small.recycle()
        if (task_png) {
            console.log('点击逛街赚钱')
            click(task_png[0], task_png[1])
            sleep(1000 * 2)

            if (text('广告').findOne(2000)) {

                back()
                sleep(1000 * 2)
                if (text('继续观看').findOne(2000)) {
                    console.log('继续观看')
                    let xy = text('继续观看').findOne(2000).center()
                    click(xy.x, xy.y)
                    sleep(1000 * 2)
                } else {
                    console.log('结束')
                    break;
                }

                console.log('进入页面')
                for (let i = 0; i < 5; i++) {
                    console.log('下滑', i)
                    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 600, Math.ceil(width / 2), Math.ceil(height / 2) - 600, 15000)
                    sleep(1000 * 5)

                    if (text('评价并收下金币').findOne(2000)) {
                        let xy = text('评价并收下金币').findOne(2000).center()
                        console.log('点击评价并收下金币')
                        click(xy.x, xy.y)
                        sleep(1000 * 2)
                        break;
                    }
                }
                sleep(1000 * 2)

            }
        }
    }



    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}


function task4() {
    let code = 0
    console.log(`开始执行${itemName}任务task4`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 1)
    console.log('打开app')
    if (!launch(appName)) {
        console.log(appName, '启动失败')
        return code
    }
    sleep(1000 * 8)
    back()
    sleep(1000 * 2)

    if (!text('朋友').findOne(2000)) {
        console.log('朋友按钮不存在')
        return code
    }

    let xy1 = text('朋友').findOne(2000).center()
    let xy2 = text('消息').findOne(2000).center()
    console.log('点击赚钱入口')
    guangxy = { x: xy1.x + Math.ceil((xy2.x - xy1.x) / 2), y: xy1.y }
    click(xy1.x + Math.ceil((xy2.x - xy1.x) / 2), xy1.y)
    sleep(1000 * 8)

    console.log('检查是否进入赚钱入口')
    let img = autojsUtils.capScreen()
    let small = images.read('./png/dyjs_ck_01.jpg')
    let task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()

    if (!task_png) {
        console.log('没有进入，没有找到《赚钱任务》')
        return code
    }

    for (let i = 0; i < 6; i++) {
        console.log('查找逛街赚钱', i)
        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 300, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 2000)
        sleep(1000 * 1)
        img = autojsUtils.capScreen()
        small = images.read('./png/dyjs_ck_05.jpg')
        task_png = autojsUtils.getPngCenter(small, img, 0.8)
        small.recycle()
        if (task_png) {
            console.log('点击逛街赚钱')
            click(task_png[0], task_png[1])
            sleep(1000 * 2)

            if (text('广告').findOne(2000)) {
                console.log('进入页面')
                for (let i = 0; i < 5; i++) {
                    console.log('下滑', i)
                    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 600, Math.ceil(width / 2), Math.ceil(height / 2) - 600, 15000)
                    sleep(1000 * 5)

                    if (text('评价并收下金币').findOne(2000)) {
                        let xy = text('评价并收下金币').findOne(2000).center()
                        click(xy.x, xy.y)
                        sleep(1000 * 2)
                        break;
                    }
                }
                sleep(1000 * 2)
            }
            break;
        }
    }



    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function task5() {
    let code = 0
    console.log(`开始执行${itemName}任务task5`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 1)
    console.log('打开app')
    if (!launch(appName)) {
        console.log(appName, '启动失败')
        return code
    }
    sleep(1000 * 8)
    back()
    sleep(1000 * 2)

    if (!text('朋友').findOne(2000)) {
        console.log('朋友按钮不存在')
        return code
    }

    let xy1 = text('朋友').findOne(2000).center()
    let xy2 = text('消息').findOne(2000).center()
    console.log('点击赚钱入口')
    guangxy = { x: xy1.x + Math.ceil((xy2.x - xy1.x) / 2), y: xy1.y }
    click(xy1.x + Math.ceil((xy2.x - xy1.x) / 2), xy1.y)
    sleep(1000 * 8)

    console.log('检查是否进入赚钱入口')
    let img = autojsUtils.capScreen()
    let small = images.read('./png/dyjs_ck_01.jpg')
    let task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()

    if (!task_png) {
        console.log('没有进入，没有找到《赚钱任务》')
        return code
    }

    for (let i = 0; i < 10; i++) {
        console.log('看广告赚金币', i)
        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 300, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 2000)
        sleep(1000 * 1)
        img = autojsUtils.capScreen()
        small = images.read('./png/dyjs_ck_07.jpg')
        task_png = autojsUtils.getPngCenter(small, img, 0.9)
        small.recycle()
        if (task_png) {
            console.log('点击看广告赚金币ok')
            click(task_png[0], task_png[1])
            sleep(1000 * 5)

            if (text('反馈').findOne(2000)) {
                console.log('进入看广告')

                dyGuangao(10)
            }
            break;
        }
    }



    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function task6() {
    let code = 0
    console.log(`开始执行${itemName}任务task6`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 1)
    console.log('打开app')
    if (!launch(appName)) {
        console.log(appName, '启动失败')
        return code
    }
    sleep(1000 * 8)
    back()
    sleep(1000 * 2)

    if (!text('朋友').findOne(2000)) {
        console.log('朋友按钮不存在')
        return code
    }

    let xy1 = text('朋友').findOne(2000).center()
    let xy2 = text('消息').findOne(2000).center()
    console.log('点击赚钱入口')
    guangxy = { x: xy1.x + Math.ceil((xy2.x - xy1.x) / 2), y: xy1.y }
    click(xy1.x + Math.ceil((xy2.x - xy1.x) / 2), xy1.y)
    sleep(1000 * 8)

    console.log('检查是否进入赚钱入口')
    let img = autojsUtils.capScreen()
    let small = images.read('./png/dyjs_ck_01.jpg')
    let task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()

    if (!task_png) {
        console.log('没有进入，没有找到《赚钱任务》')
        return code
    }

    for (let i = 0; i < 10; i++) {
        console.log('看指定视频得金币', i)
        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 300, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 2000)
        sleep(1000 * 1)
        img = autojsUtils.capScreen()
        small = images.read('./png/dyjs_ck_08.jpg')
        task_png = autojsUtils.getPngCenter(small, img, 0.9)
        small.recycle()
        if (task_png) {
            console.log('看指定视频得金币ok')
            click(task_png[0], task_png[1])
            sleep(1000 * 2)

            if (text('返回').findOne(2000)) {
                dyShiping(30)
                back()
            }
            break
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
        autojsUtils.auth()
        autojsUtils.showMem()

        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = task()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }

        for (let index = 0; index < 3; index++) {
            try {
                console.log('task2执行1第', index + 1, '次')
                let code = task2()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('task2执行1任务报错', error)
            }

        }

        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = task5()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }
        for (let index = 0; index < 3; index++) {
            try {
                console.log('task2执行1第', index + 1, '次')
                let code = task2()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('task2执行1任务报错', error)
            }

        }

        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = task()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }

        for (let index = 0; index < 3; index++) {
            try {
                console.log('task2执行1第', index + 1, '次')
                let code = task2()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('task2执行1任务报错', error)
            }

        }
        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = task5()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }

        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = task6()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }
        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = task5()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }
        for (let index = 0; index < 3; index++) {
            try {
                console.log('task2执行1第', index + 1, '次')
                let code = task2()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('task2执行1任务报错', error)
            }

        }

        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = task4()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }
        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = task5()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }
        for (let index = 0; index < 3; index++) {
            try {
                console.log('task2执行1第', index + 1, '次')
                let code = task2()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('task2执行1任务报错', error)
            }

        }

        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行3第', index + 1, '次')
                let code = task3()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }
        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = task5()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }

        for (let index = 0; index < 3; index++) {
            try {
                console.log('task2执行1第', index + 1, '次')
                let code = task2()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('task2执行1任务报错', error)
            }

        }

        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = task5()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }
        for (let index = 0; index < 3; index++) {
            try {
                console.log('task1执行1第', index + 1, '次')
                let code = task1()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('task1执行1任务报错', error)
            }

        }

        for (let index = 0; index < 5; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = task5()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行1任务报错', error)
            }

        }

    } catch (error) {
        console.error('catch====', error)
        autojsUtils.close(appName)
    } finally {
        if (flag) {

        }
        autojsUtils.media(0.2)
    }
}