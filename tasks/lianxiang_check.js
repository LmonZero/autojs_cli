const autojsUtils = require('../modules/autojs-utils');
autojsUtils.auth()

const appName = 'com.lenovo.club.app'

const itemName = '联想签到'

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
    home()
    sleep(1000 * 5)
    console.log('打开app')
    if (!launch(appName)) {
        console.log(appName, '启动失败')
        return code
    }
    sleep(1000 * 8)

    back();
    sleep(1000 * 1)

    let my = text('充值中心').findOne(2000)
    if (!my) {
        console.log('没有找到<充值中心>')
        return code
    }

    let xy = my.center()

    //
    let ck = null
    for (let i = 0; i < 3; i++) {
        ck = text('签到领好礼').findOne(2000)
        if (ck) {
            break
        }

        swipe(Math.ceil(width / 2), xy.y, 10, xy.y, 1000);
    }

    if (!ck) {
        console.log('没有找到<签到领好礼>')
        return code
    }
    let xyCK = ck.center()
    click(xyCK.x, xyCK.y)
    sleep(1000 * 2)

    if (!text('展开详情  ').findOne(2000)) {
        console.log('签到领好礼')
        let ckBegin = text('乐豆').findOne(2000)
        if (!ckBegin) {
            console.log('没有找到<乐豆>')
            return code
        }

        let CKBton = ckBegin.parent().parent().parent().parent().parent().brother(1).child(0)
        console.log('签到领好礼', CKBton.center())
        let xyCKBton = CKBton.center()
        click(xyCKBton.x, xyCKBton.y)
        sleep(1000 * 2)

    } else {
        console.log('已经签到。。')
    }

    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 2; j++) {
            if (!text('展开详情  ').findOne(2000)) {
                if (j == 0) {
                    back()
                } else {
                    console.log('任务跑飞了！！')
                    return code
                }
            }
        }


        let renwu = text('去浏览').findOne(2000)
        if (!renwu) {
            console.log('没有找到<去浏览>')
            break
        }
        renwu.click()
        console.log('去浏览,10s')
        sleep(1000 * 10)
        back();
        sleep(1000 * 3)
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
        for (let index = 0; index < 3; index++) {
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
    }
}