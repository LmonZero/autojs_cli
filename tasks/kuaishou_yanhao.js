const autojsUtils = require('../modules/autojs-utils');

autojsUtils.auth()

const appName = 'com.kuaishou.nebula'

const itemName = '快手养号任务'

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

//快手全局点站
var gXY = null

// 输出屏幕分辨率
console.log("屏幕宽度: " + width + "，屏幕高度: " + height);


function ksShiping(times) {
    console.log('开始快手视频')
    sleep(2000)
    for (let i = 0; i < times; i++) {
        console.log(i, '滑动,休息10s')
        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
        sleep(1000 * 1)
        back();
        sleep(1000 * 5)
        if (text('点击进入直播间').findOne(1000)) {
            swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
            sleep(1000 * 1)
            back();
            sleep(1000 * 2)
        }
        console.log('3分钟后会滑动')
        sleep(1000 * 60 * 3)
        let delay = Math.ceil(Math.random() * 20)
        console.log('随机', delay)
        sleep(1000 * delay)
        if (delay > 10) {
            try {
                if (id("like_button").findOne(1000)) {
                    console.log('点赞')
                    xy = id("like_button").findOne(1000).center()
                    console.log('点赞', xy)
                    if (xy && xy.x > 0 && xy.y > 0) {
                        longClick(xy.x, xy.y)
                        sleep(1000)
                    } else if (gXY) {
                        console.log('全局变量点赞==', gXY)
                        longClick(gXY.x, gXY.y)
                        sleep(1000)
                    }
                }
            } catch (error) {
                console.log('点赞失败', error)
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
    sleep(1000 * 15)
    try {
        if (id("like_button").findOne(1000)) {
            console.log('点赞')
            let xy = id("like_button").findOne(1000).center()
            console.log('点赞', xy)
            if (xy && (xy.x > 0 && xy.y > 0)) {
                gXY = xy
                console.log('长按点赞', xy)
                longClick(xy.x, xy.y)
                sleep(3000)
            }
        }
    } catch (error) {
        console.log('点赞失败', error)
    }

    ksShiping(12) // 半个小时左右


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

    } catch (error) {
        console.error('catch====', error)
        autojsUtils.close(appName)
    } finally {
        if (flag) {

        }
        autojsUtils.media(0.2)
    }
}