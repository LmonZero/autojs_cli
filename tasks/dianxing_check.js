const autojsUtils = require('../modules/autojs-utils');


const appName = 'com.ct.client'

const itemName = '电信签到任务'

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

    if (!files.ensureDir('./png')) {
        console.log('无图片目录')
        return code
    }
    let arr = files.listDir("./png");
    console.log('图片路径===', arr);

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

    let me = text('我').findOne(6 * 1000)
    if (!me) {
        console.log('未发现<我>')
        return code
    }
    let xy = me.center()
    console.log('点击<我>')
    click(xy.x, xy.y)
    sleep(1000 * 5)

    console.log('图片对比发现<签到>')
    small = images.read('./png/dianxing_ck_btn.png')
    bigImg = autojsUtils.capScreen()
    val = autojsUtils.getPngCenter(small, bigImg)
    small.recycle();
    console.log('签到图片对比结果', val)
    if (!val) {
        console.log('未发现<签到>')
        return code
    }
    click(val[0], val[1])
    sleep(1000 * 8)

    if (text('明日再来').findOne(2000)) {
        console.log('明日再来')
        text('明日再来').findOne(2000).click()
    }
    sleep(2 * 1000)
    console.log('进入抽奖界面')
    let cj = text('更多超值兑换好物 >').findOne(1000)
    if (!cj) {
        console.log('未发现<更多超值兑换好物>')
        return code
    }

    xy = cj.center()
    click(xy.x, xy.y)
    sleep(1000 * 5)

    console.log('图片对比发现<抽奖转盘>')
    small = images.read('./png/dianxing_ck_cjck.jpg')
    bigImg = autojsUtils.capScreen()
    small.recycle()

    if (!bigImg) {
        console.log('截图失败')
        return code
    }
    val = autojsUtils.getPngCenter(small, bigImg)
    small.recycle();
    console.log('抽奖转盘图片对比结果', val)
    if (val) {
        click(val[0], val[1])
        sleep(1000 * 5)
        console.log('图片对比发现<抽奖>按钮')
        small = images.read('./png/dianxing_ck_cj_btn.jpg')
        val = autojsUtils.getPngCenter(small, bigImg)
        small.recycle();
        console.log('抽奖按钮图片对比结果', val)
        click(val[0], val[1])
        for (let index = 0; index < 3; index++) {
            sleep(1000 * 5)
            if (text('继续抽奖').findOne(2000)) {
                text('继续抽奖').findOne(2000).click()
            } else {
                console.log('未发现<继续抽奖>按钮')
                break
            }
        }
    }

    console.log('返回签到界面')
    for (let i = 0; i <= 3; i++) {
        cj = text('更多超值兑换好物 >').findOne(1000)
        if (cj) {
            break;
        }

        if (i == 3) {
            console.log('返回签到界面失败,未发现<更多超值兑换好物>')
            return code
        }
        back()
        sleep(1000 * 2)

    }

    if (text('查看更多任务').findOne(1000)) {
        console.log('查看更多任务')
        sleep(1000 * 3)

        text('查看更多任务').findOne(1000).click()
        sleep(1000 * 5)

        if (text('登录任务 +5金豆').findOne(1000)) {
            console.log('登录任务 +5金豆')
            let denlu = text('登录任务 +5金豆').findOne(1000).brother(2)
            if (denlu) {
                denlu.click()
                console.log('点击登录..')

                sleep(1000 * 5)
            }
        }

    }

    //向下滑动一点
    console.log('向下滑动一点')
    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 800, Math.ceil(width / 2), Math.ceil(height / 2), 1000)
    sleep(1000 * 2)


    if (text('观看直播15s +5金豆').findOne(1000)) {
        console.log('开始看视频赚金币')
        autojsUtils.media(0)
        try {
            sleep(1000 * 2)
            let xy = text('观看直播15s +5金豆').findOne(1000).brother(2).center()
            click(xy.x, xy.y)
            sleep(1000 * 15)
            for (let index = 0; index < 10; index++) {
                console.log('滑动视频', index + 1)
                swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 300, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 500)
                console.log('等待16s')
                sleep(16 * 1000)
            }
        } catch (error) {
            console.error('观看直播15s*n err', error)
        }
        console.log('关闭视频')
        back()
        sleep(1000 * 5)
    }

    console.log('返回签到界面')
    for (let i = 0; i <= 3; i++) {
        cj = text('更多超值兑换好物 >').findOne(1000)
        if (cj) {
            break;
        }

        if (i == 3) {
            console.log('返回签到界面失败,未发现<更多超值兑换好物>')
            return code
        }
        back()
        sleep(1000 * 2)

    }

    //向下滑动一点
    console.log('向下滑动一点')
    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 800, Math.ceil(width / 2), Math.ceil(height / 2), 1000)
    sleep(1000 * 2)

    if (text('观看短视频7s +5金豆').findOne(1000)) {
        console.log('开始看视频赚金币')
        autojsUtils.media(0)
        try {
            sleep(1000 * 2)
            let xy = text('观看短视频7s +5金豆').findOne(1000).brother(2).center()
            click(xy.x, xy.y)
            sleep(1000 * 20)
            for (let index = 0; index < 10; index++) {
                console.log('滑动视频', index + 1)
                swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 300, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 500)
                console.log('等待8s')
                sleep(8 * 1000)
            }
        } catch (error) {
            console.error('观看短视频7s*n err', error)
        }
        console.log('关闭视频')
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
        autojsUtils.auth()
        autojsUtils.showMem()
        for (let index = 0; index < 5; index++) {
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