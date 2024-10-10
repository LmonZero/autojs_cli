const autojsUtils = require('../modules/autojs-utils');


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

    if (!text('商城').findOne(2000)) {
        console.log('未找到商城')
        return code
    }

    if (text('商城').findOne(2000)) {
        let xy = text('商城').findOne(2000).center()
        console.log('点击商城')
        click(xy.x, xy.y)
        sleep(1000 * 3)

        if (!text('赚金币 按钮').findOne(2000)) {
            console.log('未找到商城')
            return code
        }

        if (text('赚金币 按钮').findOne(2000)) {
            let xy = text('赚金币 按钮').findOne(2000).center()
            console.log('赚金币 按钮 点击')
            click(xy.x, xy.y)
            sleep(1000 * 2)

            if (text('连续签到7天').findOne(2000)) {
                let xy = text('连续签到7天').findOne(2000).brother(5).center()
                click(xy.x, xy.y)
                sleep(1000 * 5)
            }

            console.log('签到领取')
            img = autojsUtils.capScreen()
            small = images.read('./png/dy_nomal_ck01.jpg')
            task_png = autojsUtils.getPngCenter(small, img, 0.8)
            small.recycle()
            if (task_png) {
                console.log('点击签到领取')
                click(task_png[0], task_png[1])
                sleep(1000 * 2)
            } else {
                console.log('没有找到宝箱任务')
            }


        }

    }

    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function task1() {
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

    if (!text('商城').findOne(2000)) {
        console.log('未找到商城')
        return code
    }

    if (text('商城').findOne(2000)) {
        let xy = text('商城').findOne(2000).center()
        console.log('点击商城')
        click(xy.x, xy.y)
        sleep(1000 * 3)

        if (!text('赚金币 按钮').findOne(2000)) {
            console.log('未找到商城')
            return code
        }

        if (text('赚金币 按钮').findOne(2000)) {
            let xy = text('赚金币 按钮').findOne(2000).center()
            console.log('赚金币 按钮 点击')
            click(xy.x, xy.y)
            sleep(1000 * 2)

            if (text('浏览商城首页').findOne(2000)) {
                let xy = text('浏览商城首页').findOne(2000).brother(5).center()
                click(xy.x, xy.y)
                sleep(1000 * 5)
                if (text('赚金币 按钮').findOne(2000)) {
                    console.log('回到商城首页')
                    for (let index = 0; index < 15; index++) {
                        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 400, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 1500)
                        sleep(1000 * 5)
                    }
                    back()
                    sleep(1000 * 2)
                }


            }

        }

    }

    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function task2() {
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

    if (!text('商城').findOne(2000)) {
        console.log('未找到商城')
        return code
    }

    if (text('商城').findOne(2000)) {
        let xy = text('商城').findOne(2000).center()
        console.log('点击商城')
        click(xy.x, xy.y)
        sleep(1000 * 3)

        if (!text('赚金币 按钮').findOne(2000)) {
            console.log('未找到商城')
            return code
        }

        if (text('赚金币 按钮').findOne(2000)) {
            let xy = text('赚金币 按钮').findOne(2000).center()
            console.log('赚金币 按钮 点击')
            click(xy.x, xy.y)
            sleep(1000 * 2)

            if (text('搜索并浏览商品').findOne(2000)) {
                let xy = text('搜索并浏览商品').findOne(2000).brother(5).center()
                click(xy.x, xy.y)
                sleep(1000 * 5)
                if (text('猜你想搜').findOne(2000)) {
                    let xy = text('猜你想搜').findOne(2000).brother(7).center()
                    console.log('点击猜你想搜', xy)
                    click(xy.x, xy.y)
                    sleep(1000 * 5)

                    if (text('综合').findOne(2000)) {
                        let xy = text('综合').findOne(2000).parent().parent().parent().parent().parent().parent().parent().brother(1).center()
                        console.log('点击第一个')
                        click(xy.x, xy.y)
                        sleep(500)
                        click(xy.x, xy.y)
                        sleep(1000 * 5)
                        if (!text('综合').findOne(2000)) {
                            console.log('进入商品')
                            for (let index = 0; index < 3; index++) {
                                console.log('下滑', index)
                                swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 2000)
                                sleep(1000 * 3)
                            }

                            for (let index = 0; index < 4; index++) {
                                back()
                                sleep(1000 * 1)
                                if (text('综合').findOne(2000)) {
                                    console.log('回到商品页')

                                    for (let index = 0; index < 15; index++) {
                                        console.log('下滑', index)
                                        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 3000)
                                        sleep(1000 * 5)
                                    }

                                    break
                                }
                            }
                        }

                    } else {
                        console.log('没有进入商品')
                        return code
                    }
                }

            }

        }

    }

    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function task3() {
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

    if (!text('商城').findOne(2000)) {
        console.log('未找到商城')
        return code
    }

    if (text('商城').findOne(2000)) {
        let xy = text('商城').findOne(2000).center()
        console.log('点击商城')
        click(xy.x, xy.y)
        sleep(1000 * 3)

        if (!text('赚金币 按钮').findOne(2000)) {
            console.log('未找到商城')
            return code
        }


        if (text('赚金币 按钮').findOne(2000)) {
            let xy = text('赚金币 按钮').findOne(2000).center()
            console.log('赚金币 按钮 点击')
            click(xy.x, xy.y)
            sleep(1000 * 2)

            let tasks = ['浏览官方补贴好物', '浏览低价秒杀商品', '浏览店铺']
            for (let index = 0; index < tasks.length; index++) {

                if (!text('去提现').findOne(2000)) {
                    console.log('没有进入任务页面')
                    return code
                }

                let task = tasks[index]
                if (text(task).findOne(2000)) {
                    let xy = text(task).findOne(2000).brother(5).center()
                    console.log('点击浏览任务')
                    click(xy.x, xy.y)
                    sleep(1000 * 5)
                    if (!text('去提现').findOne(2000)) {
                        console.log('没有进入任务页面')
                        for (let index = 0; index < 15; index++) {
                            console.log('下滑', index)
                            swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 3000)
                            sleep(1000 * 5)
                        }
                        back()
                    }

                }

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
        autojsUtils.auth()
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

        for (let index = 0; index < 3; index++) {
            console.log('执行1第', index + 1, '次')
            let code = task1()
            if (code == 0) {
                autojsUtils.close(appName)
                console.log(`${itemName}任务执行失败,再次执行`)
            } else {
                break
            }
        }

        for (let index = 0; index < 3; index++) {
            console.log('执行2第', index + 1, '次')
            let code = task2()
            if (code == 0) {
                autojsUtils.close(appName)
                console.log(`${itemName}任务执行失败,再次执行`)
            } else {
                break
            }
        }

        for (let index = 0; index < 3; index++) {
            console.log('执行3第', index + 1, '次')
            let code = task3()
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