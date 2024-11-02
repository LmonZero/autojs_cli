
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

    }
    sleep(10 * 1000)
    demoCap()

    // for (var i = 0; i < 100; i++) {
    //     console.log('==================', i)
    //     demoCap()
    // }

    home()
    engines.stopAll();
    // Packages.java.lang.System.gc()

} catch (error) {
    console.log('123', error);
}


function demoCap() {

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
            toastLog('请求截图失败')
        }
        // console.log('开启线程')
        toastLog(`cap`);
        sleep(500)
        // toastLog(`cap`);
        let img = images.captureScreen();
        sleep(20)
        console.log('截图完成，', img)
        // toastLog(`截图完成`);
        images.save(img, "./screenshot.png");
        img.recycle()
    } catch (error) {
        console.error('==eeeee====', error)
    } finally {
        console.log('capScreen end thread && thread.isAlive()==', thread && thread.isAlive())
        if (thread && thread.isAlive()) {
            console.log('关闭确认线程')
            thread.interrupt();
        }
    }

}