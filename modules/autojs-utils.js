module.exports = {
    greetingPrefix: 'Hello Lmon, welcome to demojs by 1.00.00.20240923',
    findTime: 2 * 1000,
    auth() {
        /* e.g. "lmon, AutoJs6 6.4.1" */
        toastLog(`${this.greetingPrefix} ${context.getString(R.strings.app_name)} ${app.autojs.versionName}`);
    },
    close(appName) { //小米关闭app
        console.log('打开app设置', appName, launchSettings(appName))
        sleep(1000);
        let off = text("结束运行").findOne(this.findTime)
        if (off) {
            let offxy = off.center()
            click(offxy.x, offxy.y)
            sleep(1000)
            let offBtn = id("button1").findOne(this.findTime)
            if (offBtn) {
                console.log('关闭app', appName, offBtn.click())
            }
        }

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
            click(935, 2100);//点击回车只能用坐标 // 小米k40 屏幕宽度: 1080，屏幕高度: 2400
            //等待解锁完成，返回并退出
            back();
            res = true
        }
        return res
    }
};