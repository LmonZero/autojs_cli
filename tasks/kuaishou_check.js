const autojsUtils = require('../modules/autojs-utils');

autojsUtils.auth()

const appName = 'com.kuaishou.nebula'

const itemName = '快手任务'

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

function ksGuangao(times) {
    console.log('开始快手广告')
    sleep(2000)
    for (let i = 0; i < times; i++) {
        console.log('第' + (i + 1) + '次')
        sleep(1000 * 5)
        if (text('广告').findOne(1000)) {
            console.log('广告进入成功')
        } else {
            console.log('广告进入失败')
            break;
        }
        sleep(1000 * 30)

        let stop = false
        for (let j = 0; j < 2; j++) {
            back();
            sleep(1000 * 2)
            if (text('领取奖励').findOne(1000)) {
                console.log('继续领奖励')
                let xy = text('领取奖励').findOne(1000).center()
                click(xy.x, xy.y)
                sleep(1000 * 2)
                stop = false
                break;
            } else {
                console.log('无法继续看视频', j)
                stop = true
            }
        }

        if (stop) {
            break;
        }

    }

    if (text('坚持退出').findOne(1000)) {
        console.log('坚持退出')
        text('坚持退出').findOne(1000).click()
        sleep(1000 * 2)
    }

    if (text('放弃奖励').findOne(1000)) {
        console.log('放弃奖励')
        text('放弃奖励').findOne(1000).click()
        sleep(1000 * 2)
    }

}

function ksShiping(times) {
    console.log('开始快手视频')
    sleep(2000)
    for (let i = 0; i < times; i++) {
        console.log(i, '滑动,休息10s')
        swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
        sleep(1000 * 10)
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

function ksxiaoshuo(times) {
    if (id("task_sub_title").findOne(2000)) {
        console.log('小说任务', id("task_sub_title").findOne(2000).click())

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
    try {
        if (id("like_button").findOne(1000)) {
            console.log('点赞')
            let xy = id("like_button").findOne(1000).center()
            console.log('点赞', xy)
            if (xy && (xy.x > 0 && xy.y > 0)) {
                console.log('长按点赞', xy)
                longClick(xy.x, xy.y)
                sleep(3000)
            }
        }
    } catch (error) {
        console.log('点赞失败', error)
    }
    back()
    sleep(1000 * 2)

    if (!text('去赚钱').findOne(1000)) {
        console.log('去赚钱不存在')
        return code
    }

    let xy = text('去赚钱').findOne(1000).center()
    click(xy.x, xy.y)
    sleep(1000 * 15)

    try {
        if (id("like_button").findOne(1000)) {
            console.log('点赞')
            let xy = id("like_button").findOne(1000).center()
            console.log('点赞', xy)
            if (xy && (xy.x > 0 && xy.y > 0)) {
                console.log('长按点赞', xy)
                longClick(xy.x, xy.y)
                sleep(3000)
            }
        }
    } catch (error) {
        console.log('点赞失败', error)
    }

    if (!text('我的金币').findOne(5000)) {
        console.log('<我的金币> 不存在 没有进入任务页面')
        return code
    }

    console.log('去签到')
    let img = autojsUtils.capScreen()
    let small = images.read('./png/ks_ck_01.jpg')
    let task_png = autojsUtils.getPngCenter(small, img, 0.6)
    small.recycle()

    if (!task_png) {
        console.log('未找到图片签到按钮')
        if (text('点击领取今天奖励').findOne(1000)) {
            console.log('点击领取今天奖励的签到')
            let xy = text('点击领取今天奖励').findOne(1000).brother(1).center()
            click(xy.x, xy.y)
            sleep(1000 * 2)
        }
    }

    if (task_png) {
        console.log('点击签到')
        click(task_png[0], task_png[1])
        sleep(1000 * 2)
    }



    console.log('领取视频奖励')
    img = autojsUtils.capScreen()
    small = images.read('./png/ks_ck_03.jpg')
    task_png = autojsUtils.getPngCenter(small, img, 0.7)
    small.recycle()

    if (task_png) {
        console.log('找到视频领取按钮', task_png)
        click(task_png[0], task_png[1])
        sleep(1000 * 2)
        if (text('继续赚钱').findOne(1000)) {
            text('继续赚钱').findOne(1000).click()
            sleep(2 * 1000)
        }
    }

    console.log('检查是否有宝箱')
    img = autojsUtils.capScreen()
    small = images.read('./png/ks_ck_02.jpg')
    task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()

    if (task_png) {
        console.log('找到宝箱按钮', task_png)
        click(task_png[0], task_png[1])
        sleep(1000 * 2)
        if (text('开宝箱奖励已到账').findOne(1000)) {
            console.log('开宝箱奖励已到账')
            if (text('开宝箱奖励已到账').findOne(1000).brother(4).text().indexOf('去看广告赚更多')) {
                console.log('开宝箱奖励已到账,去看广告赚更多')
                let xy = text('开宝箱奖励已到账').findOne(1000).brother(4).center()
                click(xy.x, xy.y)
                sleep(1000 * 2)
                ksGuangao(5)
            }
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
    console.log(`开始执行${itemName}任务shipingTask`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 5)
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
                console.log('长按点赞', xy)
                gXY = xy
                longClick(xy.x, xy.y)
                sleep(3000)
            }
        }
    } catch (error) {
        console.log('点赞失败', error)
    }
    back()
    sleep(1000 * 2)

    if (!text('去赚钱').findOne(1000)) {
        console.log('去赚钱不存在')
        return code
    }

    let xy = text('去赚钱').findOne(1000).center()
    click(xy.x, xy.y)
    sleep(1000 * 15)

    console.log('去做任务-看广告')
    if (!text('我的金币').findOne(5000)) {
        console.log('<我的金币> 不存在 没有进入任务页面')
        return code
    }

    // if (text('看广告得16000金币').findOne(1000)) {
    //     let val = text('看广告得16000金币').findOne(1000).parent().brother(1).text()

    //     if (val == '明天再来') {
    //         console.log('明天再来,看广告得16000金币')
    //         return 1
    //     }
    // }


    for (let i = 0; i < 2; i++) {
        if (text('看广告得16000金币').findOne(1000)) {
            let val = text('看广告得16000金币').findOne(1000).parent().brother(1).text()

            if (val == '明天再来') {
                console.log('明天再来,看广告得16000金币')
            } else {
                console.log('1看广告得16000金币', className("android.widget.TextView").text("看广告得16000金币").findOne(1000).click())
                sleep(1000 * 2)
                ksGuangao(10)
            }
        }

        if (text('看广告得32万金币').findOne(1000)) {
            let val = text('看广告得32万金币').findOne(1000).parent().brother(1).text()

            if (val == '明天再来') {
                console.log('明天再来,看广告得32万金币')
            } else {
                console.log('1看广告得32万金币', className("android.widget.TextView").text("看广告得32万金币").findOne(1000).click())
                sleep(1000 * 2)
                ksGuangao(10)
            }
        }
    }

    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function shiping1Task() {
    let code = 0
    console.log(`开始执行${itemName}任务shiping1Task`)
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

    try {
        if (id("like_button").findOne(1000)) {
            console.log('点赞')
            let xy = id("like_button").findOne(1000).center()
            console.log('点赞', xy)
            if (xy && (xy.x > 0 && xy.y > 0)) {
                console.log('长按点赞', xy)
                gXY = xy

                longClick(xy.x, xy.y)
                sleep(3000)
            }
        }
    } catch (error) {
        console.log('点赞失败', error)
    }

    back()
    sleep(1000 * 5)

    if (!text('去赚钱').findOne(1000)) {
        console.log('去赚钱不存在')
        return code
    }

    let xy = text('去赚钱').findOne(1000).center()
    click(xy.x, xy.y)
    sleep(1000 * 15)

    console.log('去做任务-首页视频')
    if (!text('我的金币').findOne(5000)) {
        console.log('<我的金币> 不存在 没有进入任务页面')
        return code
    }


    if (text('看视频赚金币').findOne(1000)) {

        let val = text('看视频赚金币').findOne(1000).parent().brother(1).text()

        if (val != '已完成') {
            console.log('看视频赚金币', className("android.widget.TextView").text("看视频赚金币").findOne(1000).click())
            sleep(1000 * 2)
            ksShiping(30)
        }
    }

    if (text('去赚钱').findOne(1000)) {

        console.log('去赚钱==', desc("去赚钱").findOne(1000).click())
        sleep(5 * 1000)
        console.log('领取视频奖励')
        let img = autojsUtils.capScreen()
        let small = images.read('./png/ks_ck_03.jpg')
        let task_png = autojsUtils.getPngCenter(small, img, 0.7)
        small.recycle()

        if (task_png) {
            console.log('找到视频领取按钮', task_png)
            click(task_png[0], task_png[1])
            sleep(1000 * 2)
        } else {
            console.log('未找到视频领取按钮')
        }

        if (text('继续赚钱').findOne(1000)) {
            text('继续赚钱').findOne(1000).click()
            sleep(2 * 1000)
        }
    }


    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function shiping2Task() {
    let code = 0
    console.log(`开始执行${itemName}任务shiping2Task`)
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
    sleep(1000 * 5)

    if (!text('去赚钱').findOne(1000)) {
        console.log('去赚钱不存在')
        return code
    }

    let xy = text('去赚钱').findOne(1000).center()
    click(xy.x, xy.y)
    sleep(1000 * 15)

    console.log('去做任务-点赞任务')
    if (!text('我的金币').findOne(5000)) {
        console.log('<我的金币> 不存在 没有进入任务页面')
        return code
    }

    if (text('点赞1个作品').findOne(1000)) {
        let val = text('点赞1个作品').findOne(1000).parent().brother(1).text()
        if (val != '已完成') {
            console.log('点赞1个作品', val)
            text('点赞1个作品').findOne(1000).click()
            sleep(1000 * 2)

            for (let i = 0; i < 3; i++) {
                if (text('点击进入直播间').findOne(1000)) {
                    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
                    sleep(1000 * 1)
                    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
                    sleep(1000 * 1)
                    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
                    sleep(1000 * 1)
                }
            }

            if (id("like_button").findOne(1000)) {
                console.log('点赞')
                let xy = id("like_button").findOne(1000).center()
                console.log('点赞', xy)
                if (xy && (xy.x > 0 && xy.y > 0)) {
                    console.log('长按点赞', xy)
                    longClick(xy.x, xy.y)
                    sleep(3000)
                }

            }
        }
    }

    if (!text('去赚钱').findOne(1000)) {
        console.log('去赚钱不存在')
        return code
    }
    xy = text('去赚钱').findOne(1000).center()
    click(xy.x, xy.y)
    sleep(1000 * 5)


    if (text('收藏1个作品').findOne(1000)) {
        let val = text('收藏1个作品').findOne(1000).parent().brother(1).text()
        if (val != '已完成') {
            console.log('收藏1个作品', val)
            text('收藏1个作品').findOne(1000).click()
            sleep(1000 * 2)

            for (let i = 0; i < 3; i++) {
                if (text('点击进入直播间').findOne(1000)) {
                    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
                    sleep(1000 * 1)
                    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
                    sleep(1000 * 1)
                    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
                    sleep(1000 * 1)
                }
            }
            if (id("collect_icon").findOne(1000)) {
                console.log('收藏')
                xy = id("collect_icon").findOne(1000).center()
                console.log('收藏', xy)
                click(xy.x, xy.y)
                sleep(1000)
            }

        }
    }

    if (!text('去赚钱').findOne(1000)) {
        console.log('去赚钱不存在')
        return code
    }

    xy = text('去赚钱').findOne(1000).center()
    click(xy.x, xy.y)
    sleep(1000 * 5)


    if (text('评论1个作品').findOne(1000)) {
        let val = text('评论1个作品').findOne(1000).parent().brother(1).text()
        if (val != '已完成') {
            console.log('评论1个作品', val)
            text('评论1个作品').findOne(1000).click()
            sleep(1000 * 2)


            for (let i = 0; i < 3; i++) {
                if (text('点击进入直播间').findOne(1000)) {
                    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
                    sleep(1000 * 1)
                    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
                    sleep(1000 * 1)
                    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
                    sleep(1000 * 1)
                }
            }
            if (id("comment_button").findOne(1000)) {
                xy = id("comment_button").findOne(1000).center()
                console.log('评论', xy)
                click(xy.x, xy.y)
                sleep(2000)


                if (!text('发条有爱评论~').findOne(2000)) {
                    console.log('没有弹出评论框,再来')
                    return code
                }

                xy = text('发条有爱评论~').findOne(2000).center()
                click(xy.x, xy.y)
                sleep(1000)

                if (text('发图片评论').findOne(2000)) {
                    let xy = text('发图片评论').findOne(2000).parent().parent().parent().brother(-1).child(0).center()
                    click(xy.x, xy.y)
                    sleep(300)
                    click(xy.x, xy.y)
                    sleep(300)
                    click(xy.x, xy.y)
                    sleep(300)
                    console.log('输入====', xy)

                    xy = text('发送').findOne(2000).center()
                    click(xy.x, xy.y)
                    console.log('发送====', xy)
                    sleep(1000)
                    back()
                    sleep(1000)
                }
            }

        }
    }

    if (!text('去赚钱').findOne(1000)) {
        console.log('去赚钱不存在')
        return code
    }
    desc("去赚钱").findOne(1000).click()
    sleep(1000 * 5)
    //
    console.log('检查是否有宝箱')
    let img = autojsUtils.capScreen()
    let small = images.read('./png/ks_ck_02.jpg')
    let task_png = autojsUtils.getPngCenter(small, img, 0.8)
    small.recycle()

    if (task_png) {
        console.log('找到宝箱按钮', task_png)
        click(task_png[0], task_png[1])
        sleep(1000 * 2)

    } else {
        console.log('未找到宝箱按钮')
    }

    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function shiping3Task() {
    let code = 0
    console.log(`开始执行${itemName}任务shiping3Task`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 5)
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
                console.log('长按点赞', xy)
                longClick(xy.x, xy.y)
                sleep(3000)
            }
        }
    } catch (error) {
        console.log('点赞失败', error)
    }

    back()
    sleep(1000 * 5)



    if (!text('去赚钱').findOne(1000)) {
        console.log('去赚钱不存在')
        return code
    }

    let xy = text('去赚钱').findOne(1000).center()
    click(xy.x, xy.y)
    sleep(1000 * 15)

    console.log('去做任务-点赞任务')
    if (!text('我的金币').findOne(5000)) {
        console.log('<我的金币> 不存在 没有进入任务页面')
        return code
    }

    let val = text('看指定视频赚金币').findOne(1000)
    if (!val) {
        console.log('看指定视频赚金币不存在')
        return code
    }
    let t = val.parent().brother(1).text()
    console.log('看指定视频赚金币', t)
    if (t == '已完成') {
        console.log('逛街领金币', '任务已经完成')
        return 1
    }

    console.log('看指定视频赚金币')
    if (val.click()) {

        for (let index = 0; index < 20; index++) {
            console.log('看指定视频赚金币', index)
            sleep(1000 * 16)
            swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 200, Math.ceil(width / 2), Math.ceil(height / 2) - 500, 600)
            sleep(1000 * 1)
            if (!text('看视频').findOne(5000)) {
                console.log('看视频?? 跑飞了。。')
                back()
                sleep(1000 * 1)
                break
            }

        }
    }
    sleep(1000 * 5)
    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

function shiping4Task() {
    let code = 0
    console.log(`开始执行${itemName}任务shiping4Task`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 5)
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
                console.log('长按点赞', xy)
                longClick(xy.x, xy.y)
                sleep(3000)
            }
        }
    } catch (error) {
        console.log('点赞失败', error)
    }
    back()
    sleep(1000 * 5)

    if (!text('去赚钱').findOne(1000)) {
        console.log('去赚钱不存在')
        return code
    }

    let xy = text('去赚钱').findOne(1000).center()
    click(xy.x, xy.y)
    sleep(1000 * 15)

    console.log('去做任务-点赞任务')
    if (!text('我的金币').findOne(5000)) {
        console.log('<我的金币> 不存在 没有进入任务页面')
        return code
    }

    let val = text('看6次直播领金币').findOne(1000)
    if (!val) {
        console.log('看6次直播领金币不存在')
        return code
    }
    let t = val.parent().brother(1).text()
    console.log('看6次直播领金币', t)
    if (t == '已完成') {
        console.log('看6次直播领金币', '任务已经完成')
        return 1
    }

    console.log('看6次直播领金币')
    if (val.click()) {
        sleep(1000 * 8)

        for (let index = 0; index < 6; index++) {
            console.log('看6次直播领金币', index)
            if (!text('看直播领金币').findOne(1000)) {
                console.log('看直播 跑飞了。。')
                break
            }

            if (text('已完成6/6').findOne(1000)) {
                console.log('已完成6/6')
                break
            }

            swipe(Math.ceil(width / 2), Math.ceil(height / 2) - 500, Math.ceil(width / 2), Math.ceil(height / 2) + 200, 600)
            sleep(1000 * 6)

            text('看直播领金币').findOne(1000).parent().brother(1).child(0).child(1).child(0).click()
            sleep(1000 * 65)

            for (let i = 0; i < 3; i++) {
                back()
                sleep(1000 * 1)

                if (text('继续观看').findOne(1000)) {
                    text('继续观看').findOne(1000).click()
                    sleep(1000 * 5)
                } else {
                    if (text('看直播领金币').findOne(1000)) {
                        break
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

function guanjieTask() {
    let code = 0
    console.log(`开始执行${itemName}任务guanjieTask`)
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

    try {
        if (id("like_button").findOne(1000)) {
            console.log('点赞')
            let xy = id("like_button").findOne(1000).center()
            console.log('点赞', xy)
            if (xy && (xy.x > 0 && xy.y > 0)) {
                console.log('长按点赞', xy)
                longClick(xy.x, xy.y)
                sleep(3000)
            }
        }
    } catch (error) {
        console.log('点赞失败', error)
    }

    back()
    sleep(1000 * 2)

    if (!text('去赚钱').findOne(1000)) {
        console.log('去赚钱不存在')
        return code
    }

    let xy = text('去赚钱').findOne(1000).center()
    click(xy.x, xy.y)
    sleep(8000)

    console.log('去做任务')
    if (!text('我的金币').findOne(5000)) {
        console.log('<我的金币> 不存在 没有进入任务页面')
        return code
    }

    let val = text('逛街领金币').findOne(1000)
    if (!val) {
        console.log('逛街领金币不存在')
        return code
    }
    let t = val.parent().brother(1).text()
    if (t == '已领取') {
        console.log('逛街领金币', '任务已经完成')
        return 1
    } else {
        console.log('逛街取金币')
        if (val.click()) {
            for (let index = 0; index < 10; index++) {
                console.log('滑动下上', index)
                swipe(Math.ceil(width / 2), Math.ceil(height / 2), Math.ceil(width / 2), Math.ceil(height / 2) - 500, 5000)
                sleep(1000 * 5)
                swipe(Math.ceil(width / 2), Math.ceil(height / 2) - 500, Math.ceil(width / 2), Math.ceil(height / 2) + 200, 5000)
                sleep(1000 * 5)
                swipe(Math.ceil(width / 2), Math.ceil(height / 2), Math.ceil(width / 2), Math.ceil(height / 2) - 500, 5000)
                sleep(1000 * 5)
                swipe(Math.ceil(width / 2), Math.ceil(height / 2) - 500, Math.ceil(width / 2), Math.ceil(height / 2) + 200, 5000)
                sleep(1000 * 5)

                swipe(Math.ceil(width / 2), Math.ceil(height / 2), Math.ceil(width / 2), Math.ceil(height / 2) - 500, 5000)
                sleep(1000 * 5)
                swipe(Math.ceil(width / 2), Math.ceil(height / 2) - 500, Math.ceil(width / 2), Math.ceil(height / 2) + 200, 5000)
                sleep(1000 * 5)

                swipe(Math.ceil(width / 2), Math.ceil(height / 2), Math.ceil(width / 2), Math.ceil(height / 2) - 500, 5000)
                sleep(1000 * 5)
                swipe(Math.ceil(width / 2), Math.ceil(height / 2) - 500, Math.ceil(width / 2), Math.ceil(height / 2) + 200, 5000)
                sleep(1000 * 5)
                swipe(Math.ceil(width / 2), Math.ceil(height / 2), Math.ceil(width / 2), Math.ceil(height / 2) - 500, 5000)
                sleep(1000 * 5)

                back()
                sleep(1000 * 2)
                if (text('领取奖励').findOne(1000)) {
                    let xy = text('领取奖励').findOne(1000).center()
                    click(xy.x, xy.y)
                    sleep(1000 * 1)
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

// function xiaoshuoTask() {
//     let code = 0
//     console.log(`开始执行${itemName}任务`)
//     autojsUtils.close(appName)
//     // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
//     home()
//     sleep(1000 * 5)
//     console.log('打开app')
//     if (!launch(appName)) {
//         console.log(appName, '启动失败')
//         return code
//     }
//     sleep(1000 * 8)
//     back()
//     sleep(1000 * 2)

//     if (!text('去赚钱').findOne(1000)) {
//         console.log('去赚钱不存在')
//         return code
//     }

//     let xy = text('去赚钱').findOne(1000).center()
//     click(xy.x, xy.y)
//     sleep(8000)

//     console.log('去做任务')
//     if (!text('我的金币').findOne(5000)) {
//         console.log('<我的金币> 不存在 没有进入任务页面')
//         return code
//     }

//     console.log('看小说')
//     if (text('看小说领金币').findOne(1000)) {
//         console.log('看小说领金币', className("android.widget.TextView").text("看小说领金币").findOne().click())
//         sleep(1000 * 2)
//         ksxiaoshuo(10)
//     }

//     sleep(1000 * 5)
//     autojsUtils.close(appName)
//     home()
//     console.log(`执行${itemName}任务结束`);
//     return 1
// }



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

        for (let index = 0; index < 3; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = shiping1Task()
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
                console.log('执行0第', index + 1, '次')
                let code = shipingTask()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行0任务报错', error)
            }

        }

        for (let index = 0; index < 3; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = shiping1Task()
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
                console.log('执行0第', index + 1, '次')
                let code = shipingTask()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行0任务报错', error)
            }

        }

        for (let index = 0; index < 3; index++) {
            try {
                console.log('执行2第', index + 1, '次')
                let code = shiping2Task()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行2任务报错', error)
            }

        }

        for (let index = 0; index < 3; index++) {
            try {
                console.log('执行3第', index + 1, '次')
                let code = shiping3Task()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行3任务报错', error)
            }

        }

        for (let index = 0; index < 3; index++) {
            try {
                console.log('执行guanjieTask第', index + 1, '次')
                let code = guanjieTask()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行guanjieTask任务报错', error)
            }

        }

        for (let index = 0; index < 3; index++) {
            try {
                console.log('执行1第', index + 1, '次')
                let code = shiping1Task()
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
                console.log('执行4第', index + 1, '次')
                let code = shiping4Task()
                if (code == 0) {
                    autojsUtils.close(appName)
                    console.log(`${itemName}任务执行失败,再次执行`)
                } else {
                    break
                }
            } catch (error) {
                console.log('执行4任务报错', error)
            }

        }


        //小说暂时不用
        // for (let index = 0; index < 3; index++) {
        //     try {
        //         console.log('执行xiaoshuoTask第', index + 1, '次')
        //         let code = xiaoshuoTask()
        //         if (code == 0) {
        //             autojsUtils.close(appName)
        //             console.log(`${itemName}任务执行失败,再次执行`)
        //         } else {
        //             break
        //         }
        //     } catch (error) {
        //         console.log('执行xiaoshuoTask任务报错', error)
        //     }

        // }
    } catch (error) {
        console.error('catch====', error)
        autojsUtils.close(appName)
    } finally {
        if (flag) {

        }
        autojsUtils.media(0.2)
    }
}