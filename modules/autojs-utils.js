
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

module.exports = {
    greetingPrefix: 'ver-1.00.00.20241008',
    findTime: 2 * 1000,
    auth() {
        /* e.g. "lmon, AutoJs6 6.4.1" */
        let runningScripts = engines.all();
        toastLog(`now run ${runningScripts.length}==${this.greetingPrefix}`);
    },
    close(appName) { //小米关闭app
        home()
        sleep(1000)
        recents()

        if (id('clearAnimView').findOne(1000)) {
            id('clearAnimView').findOne(1000).click()
        }

        console.log('打开app设置', appName, launchSettings(appName))
        sleep(2000);
        let off = text("结束运行").findOne(this.findTime)
        sleep(1000);
        if (off) {
            let offxy = off.center()
            click(offxy.x, offxy.y)
            sleep(1000)
            let offBtn = id("button1").findOne(this.findTime)
            if (offBtn) {
                console.log('关闭app', appName, offBtn.click())
            }
        }
        this.showMem()

    },
    checkMiuiPermission(flag) {
        //flag为10021是后台弹出界面,为10016是NFC权限
        importClass(android.app.AppOpsManager);
        let appOps = context.getSystemService(context.APP_OPS_SERVICE);
        console.log(context.APP_OPS_SERVICE);
        try {
            let myClass = util.java.array("java.lang.Class", 3);
            myClass[0] = java.lang.Integer.TYPE;
            myClass[1] = java.lang.Integer.TYPE;
            myClass[2] = java.lang.Class.forName("java.lang.String");
            let method = appOps.getClass().getMethod("checkOpNoThrow", myClass);
            let op = new java.lang.Integer(flag);
            result = method.invoke(appOps, op, new java.lang.Integer(android.os.Process.myUid()), context.getPackageName());
            return result == AppOpsManager.MODE_ALLOWED;
        } catch (err) {
            console.error(err);
        }
    },
    barrierFree(times) { //无障碍权限检查
        for (let i = 1; i <= times; i++) {
            if (!auto.service) {
                toastLog('请先开启无障碍服务', `${i}/${times}`);
                auto.waitFor();
            }
        }
    },
    unlock(pwd) {
        let res = false
        var width = Math.ceil(device.width / 2);
        var height = Math.ceil(device.height / 4);

        if (!device.isScreenOn()) {//息屏状态将屏幕唤醒

            device.wakeUp();//唤醒设备

            sleep(1000); // 等待屏幕亮起

            //miui锁屏滑动不能唤出密码输入 通过下拉通知栏点击时间进入密码解锁 //现在也可以
            swipe(width, device.height - height, width, height, 1000);
            sleep(300);
            // let pwd = 'lmon.com'
            for (let index = 0; index < pwd.length; index++) {
                let word = pwd[index];
                // console.log('输入密码', index, word);
                text(word).findOne(this.findTime).click();
                sleep(500);
            }

            // text('↩').findOne().click();
            // click(935, 2100);//点击回车只能用坐标 // 小米k40 屏幕宽度: 1080，屏幕高度: 2400
            desc('回车').findOne(this.findTime).click();
            //等待解锁完成，返回并退出
            back();
            res = true
        }
        return res
    },
    media(percent) {
        try {
            let audioManager = context.getSystemService(context.AUDIO_SERVICE);
            let max = audioManager.getStreamMaxVolume(android.media.AudioManager.STREAM_MUSIC)
            let current = Math.floor(max * percent)
            console.log('设置音量', current);
            audioManager.setStreamVolume(android.media.AudioManager.STREAM_MUSIC, current, 0)
        } catch (error) {
            console.error('设置音量失败', error)
        }
    },
    capScreen() {
        var thread
        try {
            thread = threads.start(function () {
                sleep(500)

                if (text('立即开始').findOne(3000)) {
                    text('立即开始').findOne(1000).click()
                }
                console.log('线程结束..')
            });
            if (!images.requestScreenCapture()) {
                console.log('请求截图失败')
                toastLog('请求截图失败');
                return
            }
            // console.log('开启线程')
            toastLog(`cap`);
            sleep(500)
            let img = images.captureScreen();
            sleep(20)
            console.log('截图完成')
            // toastLog(`截图完成`);
            return img
        } catch (error) {
            console.error('==eeeee====', error)
        } finally {
            console.log('capScreen end thread && thread.isAlive()==', thread && thread.isAlive())
            if (thread && thread.isAlive()) {
                console.log('关闭确认线程')
                thread.interrupt();
            }
        }

    },
    getPngCenter(smallImg, bigImg, threshold) {

        try {
            let point = null
            if (threshold) {
                point = images.findImage(bigImg, smallImg, {
                    threshold: threshold
                });
            } else {
                point = images.findImage(bigImg, smallImg);
            }

            if (point) {
                return [point.x + smallImg.width / 2, point.y + smallImg.height / 2, point.x, point.y, smallImg.width, smallImg.height]
            } else {
                return
            }
        } catch (error) {
            console.error('==eeeee====', error)
        }

    }, randomSwipe(sx, sy, ex, ey) {
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
    },
    showMem() {

        try {
            var am = context.getSystemService(context.ACTIVITY_SERVICE);

            var mi = new android.app.ActivityManager.MemoryInfo();

            am.getMemoryInfo(mi);

            var totalMemory = mi.totalMem / (1024 * 1024);

            var availableMemory = mi.availMem / (1024 * 1024);

            var usedMemory = totalMemory - availableMemory;

            log("总内存：" + totalMemory.toFixed(2) + "MB");

            log("可用内存：" + availableMemory.toFixed(2) + "MB");

            log("已用内存：" + usedMemory.toFixed(2) + "MB");

            var runningAppList = am.getRunningAppProcesses();

            for (var i = 0; i < runningAppList.size(); i++) {

                var appProcessInfo = runningAppList.get(i);

                var processName = appProcessInfo.processName;

                var pid = appProcessInfo.pid;

                var memoryInfo = am.getProcessMemoryInfo([pid]);

                var memorySize = memoryInfo[0].getTotalPss() / 1024;

                log("应用名称：" + processName);

                log("内存占用：" + memorySize.toFixed(2) + "MB");
                toastLog("内存占用：" + memorySize.toFixed(2) + "MB")
                sleep(1000)
            }

            // Packages.java.lang.System.gc()

        } catch (error) {
            console.log('123', error);
        }

    }
};