
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

    engines.stopAll();
    // Packages.java.lang.System.gc()

} catch (error) {
    console.log('123', error);
}
