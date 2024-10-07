
// 获取屏幕宽度和高度
var width = device.width;
var height = device.height;

try {
    // console.log(text('领潮金币').findOne(1000))
    console.log('1234====')
    // console.log('====', text('我的').findOne(1000))
    // console.log('====', desc('5598\n每天免费加曝光').findOne(1000).parent())
    // console.log('====', text('攻略').findOne(1000).parent().child())
    // console.log('====', className('ListView').findOne(2000).child(0))
    // console.log('====', text('明日寻宝酬金').findOne(1000))

    // let all = text('m').findOne().parent().children();
    // console.log(all.length);
    // // all.forEach(element => {
    // //     console.log(element.text());
    // // });

    // console.log('====', all[all.length - 1])


    // let myWelfare = text('网商银行').findOne(2000).parent().brother(1).child(0).child(0).child(0).child(0).child(2)
    // // if (!myWelfare) {
    // //     console.log('未找到我的福利')
    // //     return code
    // // }
    // // console.log(myWelfare)
    // // myWelfare.click()
    // let xy = myWelfare.center()
    // click(xy.x, xy.y)
    // sleep(2 * 1000)
    // text('福利金特权').findOne(2000).parent().brother(3).click()

    // app.startActivity({
    //     action: "android.settings.action.MANAGE_WRITE_SETTINGS",
    //     data: "package:" + context.getPackageName()
    // });
    // console.log('====', context.getPackageName())
    // text('我的')


    // 获取AudioManager实例
    // var audioManager = context.getSystemService(context.AUDIO_SERVICE);

    // // 设置音量为最大值（这里只是示例，具体值根据需要调整）
    // // audioManager.setStreamVolume(
    // //     AudioManager.STREAM_MUSIC, // 音量类型
    // //     audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC), // 最大音量
    // //     0 // 调整音量的标志，通常为0
    // // );
    // audioManager.setStreamVolume(android.media.AudioManager.STREAM_MUSIC, 20, 0);

    // console.log(text('去完成').findOne(2000))
    // console.log(images.requestScreenCapture())


    //text('关闭').findOne(2000).click()  // 在没有 看视频得60分钟 的情况下，关闭按钮是存在的

    //text('看视频得60分钟') // false

    // text('直播间观看时长计入奖励时长')//false  //  这个要点进去 //还存在需要在点


    //text('你的听书时长已用完') // false
    // text('立即观看') // true

    // text('广告') //false
    // text('继续观看') //false
    // text('领取成功') //false

    // 返回需要等待 5s

    // let val = text('刷听书时长').findOne(2000)

    // // if (!val) {
    // //     console.log('估计跑飞了')
    // //     return code
    // // }
    // let book = val.parent().parent().parent().brother(1).child(0).child(0)
    // console.log('点击当前分组第一本书', book)
    // sleep(10 * 1000)
    // var thread
    // try {
    //     thread = threads.start(function () {
    //         if (text('立即开始').findOne(5000)) {
    //             text('立即开始').findOne(1000).click()
    //         }
    //     });
    //     if (!images.requestScreenCapture()) {
    //         toastLog('请求截图失败');
    //     }
    //     sleep(200)
    //     let img = images.captureScreen();
    //     let small = images.read("./png/dianxing_ck_btn.png")
    //     console.log('====', small.width, small.height)
    //     let p = images.findImage(img, small)
    //     console.log('====', p.x, p.y)
    //     click(p.x + Math.floor(small.width / 2), p.y + Math.floor(small.height / 2))

    // } catch (error) {
    //     console.error('==eeeee====', error)
    // } finally {
    //     if (thread) {
    //         thread.interrupt();
    //     }
    // }

    // console.log(text('我').findOne(2000))

    // //向下滑动一点
    // console.log('向下滑动一点')
    // swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 800, Math.ceil(width / 2), Math.ceil(height / 2), 1000)
    // sleep(1000 * 2)

    // console.log('====', text('分享').findOne(2000).parent().brother(-1))
    // let xy = id("like_button").findOne(1000).center()
    // console.log('点赞', xy)
    // click(xy.x, xy.y)
    // sleep(1000)

    // xy = id("collect_icon").findOne(1000).center()
    // console.log('收藏', xy)
    // click(xy.x, xy.y)
    // sleep(1000)

    // xy = id("comment_button").findOne(1000).center()
    // console.log('评论', xy)
    // click(xy.x, xy.y)
    // sleep(2000)

    // xy = text('发条有爱评论~').findOne(2000).center()
    // click(xy.x, xy.y)
    // sleep(1000)

    // if (text('发图片评论').findOne(2000)) {
    //     let xy = text('发图片评论').findOne(2000).parent().parent().parent().brother(-1).child(0).center()
    //     click(xy.x, xy.y)
    //     sleep(300)
    //     click(xy.x, xy.y)
    //     sleep(300)
    //     click(xy.x, xy.y)
    //     sleep(300)
    //     console.log('输入====', xy)

    //     xy = text('发送').findOne(2000).center()
    //     click(xy.x, xy.y)
    //     console.log('发送====', xy)
    //     sleep(1000)
    //     back()
    //     sleep(1000)
    // }

    // console.log(text('开宝箱奖励已到账').findOne(1000).brother(4).text().indexOf('去看广告赚更多'))

    // centerX(212, 1485)
    // gesture(3000, [212, 1485], [300, 1485])
    // if (text('亲，请拖动下方滑块完成验证').findOne(2000)) {

    //     let xy = text('亲，请拖动下方滑块完成验证').findOne(2000).brother(2).child(0).child(0).child(0).child(1).center()
    //     console.log('需要滑动验证验证码====', xy)
    //     // gesture(1500, [xy.x, xy.y], [Math.ceil((width - 100) / 2), xy.y], [Math.ceil((width - 100) / 3), xy.y], [width - 100, xy.y])
    //     // gestures([0, 800, [xy.x, xy.y], [Math.ceil((width - 100) / 2), xy.y]], [30, 500, [Math.ceil((width - 100) / 2), xy.y], [width - 100, xy.y]])
    //     randomSwipe(xy.x, xy.y, width - 100, xy.y)
    // }
    console.log('====', text('分享').findOne(2000).parent().parent())
    let xy = text('收藏').findOne(2000).parent().parent().child(1).center()
    console.log('点赞开始', xy)
    if (xy && xy.x > 0 && xy.y > 0) {
        click(xy.x, xy.y)
        sleep(1000 * 2)
    }

} catch (error) {
    console.error('==eeeee====', error)
}


function randomSwipe(sx, sy, ex, ey) {
    //设置随机滑动时长范围
    var timeMin = 500
    var timeMax = 1500
    //设置控制点极限距离
    var leaveHeightLength = 500

    //根据偏差距离，应用不同的随机方式
    if (Math.abs(ex - sx) > Math.abs(ey - sy)) {
        var my = (sy + ey) / 2
        var y2 = my + random(0, leaveHeightLength)
        var y3 = my - random(0, leaveHeightLength)

        var lx = (sx - ex) / 3
        if (lx < 0) { lx = -lx }
        var x2 = sx + lx / 2 + random(0, lx)
        var x3 = sx + lx + lx / 2 + random(0, lx)
    } else {
        var mx = (sx + ex) / 2
        var y2 = mx + random(0, leaveHeightLength)
        var y3 = mx - random(0, leaveHeightLength)

        var ly = (sy - ey) / 3
        if (ly < 0) { ly = -ly }
        var y2 = sy + ly / 2 + random(0, ly)
        var y3 = sy + ly + ly / 2 + random(0, ly)
    }

    //获取运行轨迹，及参数
    var time = [0, random(timeMin, timeMax)]
    var track = bezierCreate(sx, sy, x2, y2, x3, y3, ex, ey)

    log("随机控制点A坐标：" + x2 + "," + y2)
    log("随机控制点B坐标：" + x3 + "," + y3)
    log("随机滑动时长：" + time[1])

    //滑动
    gestures(time.concat(track))
    console.hide()
}


function bezierCreate(x1, y1, x2, y2, x3, y3, x4, y4) {
    //构建参数
    var h = 100;
    var cp = [{ x: x1, y: y1 + h }, { x: x2, y: y2 + h }, { x: x3, y: y3 + h }, { x: x4, y: y4 + h }];
    var numberOfPoints = 100;
    var curve = [];
    var dt = 1.0 / (numberOfPoints - 1);

    //计算轨迹
    for (var i = 0; i < numberOfPoints; i++) {
        var ax, bx, cx;
        var ay, by, cy;
        var tSquared, tCubed;
        var result_x, result_y;

        cx = 3.0 * (cp[1].x - cp[0].x);
        bx = 3.0 * (cp[2].x - cp[1].x) - cx;
        ax = cp[3].x - cp[0].x - cx - bx;
        cy = 3.0 * (cp[1].y - cp[0].y);
        by = 3.0 * (cp[2].y - cp[1].y) - cy;
        ay = cp[3].y - cp[0].y - cy - by;

        var t = dt * i
        tSquared = t * t;
        tCubed = tSquared * t;
        result_x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
        result_y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
        curve[i] = {
            x: result_x,
            y: result_y
        };
    }

    //轨迹转路数组
    var array = [];
    for (var i = 0; i < curve.length; i++) {
        try {
            var j = (i < 100) ? i : (199 - i);
            xx = parseInt(curve[j].x)
            yy = parseInt(Math.abs(100 - curve[j].y))
        } catch (e) {
            break
        }
        array.push([xx, yy])
    }

    return array
}
