
console.log('auto==', auto.service); // 检查无障碍模式 

console.log('弹窗权限', checkMiuiPermission(10021));
auto.waitFor()
function checkMiuiPermission(flag) {
    //flag为10021是后台弹出界面,为10016是NFC权限
    importClass(android.app.AppOpsManager);
    let appOps = context.getSystemService(context.APP_OPS_SERVICE);
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
}


// home()
// //打开弹窗
// //日志展示
// //脚本的启动、关闭
// let appName = 'com.taobao.taobao'
// console.log('打开app', appName, launchPackage(appName))
// // // setTimeout(() => { //pass 需要root权限
// // //     console.log('关闭app', appName, shell(`am force-stop ${appName}`))
// // // }, 1 * 1000)
// sleep(1000)
// console.log('打开app设置', appName, launchSettings(appName))
// sleep(1000)
// //点击
// id("action_menu_item_child_text").className("android.widget.TextView").text("结束运行").findOne().parent().click()
// sleep(1000)
// console.log('关闭app', appName, id("button1").findOne().click())

// home()

// 获取屏幕宽度和高度
var width = device.width;
var height = device.height;

// 输出屏幕分辨率
console.log("屏幕宽度: " + width + "，屏幕高度: " + height);


for (let index = 0; index < 200; index++) {
    click(Math.ceil(width / 2), Math.ceil(height / 2))
    console.log('点击屏幕')
    sleep(50)
}

// if (!device.isScreenOn()) {//息屏状态将屏幕唤醒

//     device.wakeUp();//唤醒设备

//     sleep(1000); // 等待屏幕亮起

//     //miui锁屏滑动不能唤出密码输入 通过下拉通知栏点击时间进入密码解锁 //现在也可以
//     swipe(500, 1000, 500, 100, 600);
//     sleep(300);

//     // let pwd = 'lmon.com'
//     // for (let index = 0; index < pwd.length; index++) {
//     //     let word = pwd[index];
//     //     console.log('输入密码', index, word);
//     //     text(word).findOne(1000).click();
//     //     sleep(500);
//     // }

//     let all = text('w').findOne().parent().child();
//     console.log(all.length);
//     all.forEach(element => {
//         console.log(element.text());
//     });

//     // click(935, 2100);//点击回车只能用坐标 // 小米k40
//     //等待解锁完成，返回并退出

//     back();

//     console.log(home())

// }

// console.log('auto==', auto.service); // 检查无障碍模式
// exit()