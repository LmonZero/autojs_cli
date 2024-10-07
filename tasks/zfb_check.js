const autojsUtils = require('../modules/autojs-utils');

autojsUtils.auth()

const appName = 'com.eg.android.AlipayGphone'

const itemName = '支付宝任务'

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


function zfbShiping(times) {
    console.log('开始支付宝视频')
    sleep(6000)
    for (let i = 0; i < times; i++) {
        if (!text('发现').findOne(2000)) {
            console.log('发现不存在,跑飞了？？')
            break
        }

        console.log(i, '滑动,休息15s')
        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
        sleep(1000 * 15)
        let delay = Math.ceil(Math.random() * 15)
        console.log('随机', delay)
        sleep(1000 * delay)
        if (delay > 6) {
            if (text('收藏').findOne(1000)) {
                try {

                    let xy = text('收藏').findOne(2000).parent().parent().child(1).center()
                    console.log('点赞开始', xy)
                    if (xy && xy.x > 0 && xy.y > 0) {
                        click(xy.x, xy.y)
                        sleep(1000 * 2)
                    }

                } catch (error) {
                    console.log('点赞失败', error)
                }
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
    sleep(1000 * 5)
    // back()
    // sleep(1000 * 2)

    if (!text('视频').findOne(1000)) {
        console.log('视频不存在')
        return code
    }

    let xy = text('视频').findOne(1000).center()
    click(xy.x, xy.y)
    sleep(1000 * 10)

    zfbShiping(30)

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