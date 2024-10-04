
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


    recents()

} catch (error) {
    console.error('==eeeee====', error)
}


