const autojsUtils = require('../modules/autojs-utils');
autojsUtils.auth()

const appName = 'com.tencent.qqlive'

const itemName = '腾讯视频签到'

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
    if (!files.ensureDir('./png')) {
        console.log('无图片目录')
        return code
    }
    let arr = files.listDir("./png");
    console.log('图片路径===', arr);

    home()
    sleep(1000 * 5)
    console.log('打开app')
    if (!launch(appName)) {
        console.log(appName, '启动失败')
        return code
    }
    sleep(1000 * 10)


    let my = text('个人中心').findOne(2000)
    if (!my) {
        console.log('没有找到个人中心')
        return code
    }

    let xy = my.center()
    click(xy.x, xy.y)
    sleep(5 * 1000)

    //向下滑动一点
    console.log('向下滑动一点')
    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 500, Math.ceil(width / 2), Math.ceil(height / 2), 1000)
    sleep(1000 * 2)

    if (!text('签到').findOne(2000)) {
        console.log('向下滑动一点')
        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 500, Math.ceil(width / 2), Math.ceil(height / 2), 1000)
        sleep(1000 * 2)
    }

    if (text('签到').findOne(2000)) {
        console.log('点击签到')
        let xyCk = text('签到').findOne(2000).center()
        click(xyCk.x, xyCk.y)
        // text('看广告，可额外+10积分')
        sleep(1000 * 5)
    } else if (text('做任务兑VIP等好礼').findOne(2000)) {
        autojsUtils.media(0)
        let xyCk = text('做任务兑VIP等好礼').findOne(2000).center()
        console.log('点击做任务兑VIP等好礼')
        click(xyCk.x, xyCk.y)
        sleep(1000 * 5)

        for (let index = 0; index < 80; index++) {

            console.log('开始刷广告', index)
            let small = images.read('./png/tengxun_video_task.jpg')
            let img = autojsUtils.capScreen()
            console.log('截图完成')
            let xyTask = autojsUtils.getPngCenter(small, img)
            small.recycle()
            if (xyTask) {
                console.log('找到广告', xyTask)
            } else {
                console.log('没有找到广告任务')
                break;
            }


            //查看领取
            let img1 = autojsUtils.capScreen()
            let smallbton_get = images.read('./png/tengxun_video_task_linqu_bton.jpg')
            let xyTaskBt_get = autojsUtils.getPngCenter(smallbton_get, img1)
            smallbton_get.recycle()
            console.log('找到领取按钮', xyTaskBt_get)
            if (xyTaskBt_get) {
                console.log('点击领取按钮', xyTaskBt_get[0], xyTask[1])
                click(xyTaskBt_get[0], xyTask[1])
                sleep(1000 * 5)
                if (text('成功领取10积分').findOne(2000)) {
                    let shipingAgain = text('成功领取10积分').findOne(2000).brother(1)
                    if (shipingAgain) {
                        let xy = shipingAgain.center()
                        console.log('点击领取')
                        xy = click(xy.x, xy.y)
                        sleep(1000 * 8)
                    }
                }
            } else {
                img = autojsUtils.capScreen()
                let smallbton = images.read('./png/tengxun_video_task_bton.jpg')
                let xyTaskBt = autojsUtils.getPngCenter(smallbton, img)
                smallbton.recycle()
                console.log('找到广告按钮', xyTaskBt)
                if (!xyTaskBt && index > 1) {
                    console.log('没有找到广告按钮')
                    return code
                }

                console.log('点击广告按钮', xyTaskBt[0], xyTask[1])
                click(xyTaskBt[0], xyTask[1])
                sleep(1000 * 9)
            }

            // if (xyTaskBt) {

            img = autojsUtils.capScreen()
            let smallbton2 = images.read('./png/tengxun_video_guangao_ing.jpg')

            let xyTaskBt2 = autojsUtils.getPngCenter(smallbton2, img, 0.6)
            smallbton2.recycle()
            console.log('是否进入视频', xyTaskBt2)
            if (!xyTaskBt2) {
                console.log('没有进入视频')
                return code
            }

            sleep(1000 * 10)

            let smallbton3 = images.read('./png/tengxun_video_guangao_ok.jpg')

            let xyTaskBt3 = autojsUtils.getPngCenter(smallbton3, img)
            smallbton3.recycle()
            console.log('是否完成视频观看', xyTaskBt3)
            if (xyTaskBt3) {
                console.log('完成视频观看')
            }
            back()
            sleep(5 * 1000)

        }


    }

    console.log('执行任务结束')

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