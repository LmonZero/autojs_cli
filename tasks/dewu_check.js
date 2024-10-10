const autojsUtils = require('../modules/autojs-utils');


const appName = 'com.shizhuang.duapp'

const itemName = '签到有奖'

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

//遍历任务清单
function runTaskList() {
    let res = false
    //
    let c1 = text('去完成').findOne(1000)
    let c2 = text('领取奖励').findOne(1000)
    if (!c1 && !c2) {
        console.log('无任务可做')

        let c3 = text('明日再来').findOne(1000)
        if (c3) {
            console.log('明日再来')
            return true
        } else {
            return res
        }
    }


    let p1s = null
    if (c1) {
        p1s = c1.parent().children()
    }

    if (c2) {
        p1s = c2.parent().children()
    }

    console.log('任务列表', `${p1s.length}/6`, p1s.length / 6)
    for (let i = 0; i < p1s.length; i += 6) {

        if (!(text('领潮金币').findOne(1000))) {
            console.log('任务跑飞。。。')
            return res
        }

        let title = p1s[i].text()
        let val = p1s[i + 4].text()
        let btn = p1s[i + 5]
        if (btn.text() == '今日已完成') {
            i++
        }
        console.log(title, val, btn.text())
        let flag = true
        if (btn.text() == '去完成') {
            if (title.slice(0, 2) == '浏览') {
                console.log('浏览型任务')
                if (btn.click()) {
                    runBrowseTask(6)
                    // res = id('com.shizhuang.duapp:id/brand_cover_toolbar_navigationIcon_id').findOne(1000).click()
                    // if (!res) {
                    //     return res
                    // }
                    back()
                }

            } else if (title.slice(0, 2) == '逛逛') {
                console.log('浏览型任务')
                if (btn.click()) {
                    runBrowseTask(3)
                    // res = id('com.shizhuang.duapp:id/brand_cover_toolbar_navigationIcon_id').findOne(1000).click()
                    // if (!res) {
                    //     return res
                    // }
                    back()

                }


            } else if (title.slice(0, 2) == '收藏') {
                console.log('收藏型任务')
                if (btn.click()) {
                    runCollectTask()

                    // backId = id('com.shizhuang.duapp:id/homeAsUpBtn').findOne(1000).click()
                    // if (!backId) {
                    //     return res
                    // }
                    back()
                }
            }
            // console.log('休息3s')
            // sleep(1000 * 3)
        } else if ((btn.text() == '领取奖励')) {
            console.log(title, val, '任务领取奖励,领取奖励', btn.click())
            // console.log(title, val, '任务领取奖励,待领取奖励')

        } else {
            console.log('其他')
            flag = false
        }
        if (flag) {
            console.log('休息3s')
            sleep(1000 * 3)
        }

    }

    // for (let i = 0; i < Math.ceil(p1s.length / 6); i++) {
    //     let btn = text('领取奖励').findOne(1000)
    //     if (!btn) {
    //         break;
    //     }
    //     //
    //     btn.click()
    //     let xy = btn.center()
    //     let wh = btn.bounds()
    //     //滑动
    //     automator.swipe(wh.left, wh.bottom + wh.width * 2, wh.left, wh.bottom, 1000);
    //     console.log('领取奖励', i)
    //     sleep(1000 * 3)
    // }

    return true
}

//浏览型任务
function runBrowseTask(times) {
    sleep(1000 * 5)
    for (let i = 0; i < times; i++) {
        let dstH = Math.floor(height / 3)
        let offsetW = Math.floor(Math.random() * 100)
        automator.swipe(Math.floor(width / 2) - offsetW, height - dstH, Math.floor(width / 2) + offsetW + Math.floor(Math.random() * 100), dstH, 1500);
        sleep(1000 * 5)
    }

}

//收藏型任务
function runCollectTask() {
    sleep(1000 * 5)
    //点击想要
    console.log('点击想要')
    let wantBtn = text('想要').findOne(2000)
    if (wantBtn) {
        let wxy = wantBtn.center()
        click(wxy.x, wxy.y)
    }
    sleep(1000 * 3)
    let wandetail = id('com.shizhuang.duapp:id/itemRoot').findOne(2000)
    if (wandetail) {
        let wdxy = wandetail.center()
        longClick(wdxy.x, wdxy.y)
        console.log('点击收藏')
    }
    sleep(1000 * 3)
    back()
    sleep(1000 * 2)
}

//横向滑动寻找项目
function findItemsText(times, itemName) {
    let item = null
    for (let i = 0; i < times; i++) {

        item = text(itemName).findOne(2000)
        if (item) {
            break
        }

        // 根据控件的ID找到控件
        let horizontalScrollViews = id('com.shizhuang.duapp:id/recyclerView').find();
        console.log(i, '控件组数量', horizontalScrollViews.length)

        let bounds = horizontalScrollViews[horizontalScrollViews.length - 1].bounds();
        let center = horizontalScrollViews[horizontalScrollViews.length - 1].center();
        console.log('滑动位置的坐标', bounds)
        console.log('滑动位置中心的坐标', center.x, center.y)
        //从中心开始滑动 
        // // 设置滑动的持续时间
        let duration = 1500;

        // // 执行滑动操作
        automator.swipe(center.x, center.y, bounds.left, bounds.top, duration);
    }

    if (!item) {//反向滑动
        console.log('反向滑动查找')
        for (let i = 0; i < times; i++) {
            item = text(itemName).findOne(2000)
            if (item) {
                break
            }


            // 根据控件的ID找到控件
            let horizontalScrollViews = id('com.shizhuang.duapp:id/recyclerView').find();
            console.log('控件组数量', horizontalScrollViews.length)

            let bounds = horizontalScrollViews[horizontalScrollViews.length - 1].bounds();
            let center = horizontalScrollViews[horizontalScrollViews.length - 1].center();
            console.log('滑动位置的坐标', bounds)
            console.log('滑动位置中心的坐标', center.x, center.y)
            //从中心开始滑动 
            // // 设置滑动的持续时间
            let duration = 1500;

            // // 执行滑动操作
            automator.swipe(bounds.left, bounds.top, center.x, center.y, duration);
        }
    }

    return item

}


function task() {
    let code = 0
    console.log(`开始执行${itemName}任务`)
    autojsUtils.close(appName)
    // com.shizhuang.duapp.modules.orderlist.activity.MyBuyActivityV2
    home()
    sleep(1000 * 5)
    if (!launch(appName)) {
        console.log(appName, '启动失败')
        return code
    }
    sleep(1000 * 10)
    console.log('打开app')
    let myBton = text('探索').findOne(2000)

    if (!myBton) {
        console.log('未找到探索按钮')
        return code
    }
    let mxy = myBton.center()
    click(mxy.x, mxy.y)
    sleep(1000 * 2)

    let palyBton = text('玩一玩').findOne(2000)
    if (!palyBton) {
        console.log('未找到玩一玩按钮')
        return code
    }
    let pxy = palyBton.center()
    click(pxy.x, pxy.y)
    sleep(1000 * 2)
    let isok = false
    let cBton = text('已签到').findOne(2000)
    if (cBton) {
        let cxy = cBton.center()
        click(cxy.x, cxy.y)
        isok = true
    }
    let cBton1 = text('去签到').findOne(2000)
    if (cBton1) {
        let cxy = cBton1.center()
        click(cxy.x, cxy.y)
        isok = true
    }
    sleep(1000 * 10)
    if (!isok) {
        console.log('未找到入口', itemName)
        return code
    }


    // let cBton1 = text('已签到').findOne(2000)
    // if (cBton1) {
    //     let cxy = cBton1.center()
    //     click(cxy.x, cxy.y)
    // }

    // 通过我的里面 舍去
    // let taskXingYuan = findItemsText(3, itemName);
    // if (!taskXingYuan) {
    //     console.log('未找到', itemName)
    //     return code
    // }
    // let bounds = taskXingYuan.bounds()
    // console.log(itemName, bounds)
    // click(bounds.centerX(), bounds.centerY())


    let onlineBton = text('在线奖励').findOne(2000)
    if (onlineBton) {
        let cxy = onlineBton.center()
        click(cxy.x, cxy.y)
        console.log('点击在线奖励')
        sleep(2 * 1000)
    }


    let taskBon = text('领潮金币').findOne(1000)
    if (!taskBon) {
        console.log('未找到领潮金币')
        return code
    }
    sleep(5 * 1000)
    let ckBton = text('今日签到').findOne(2000)
    if (ckBton) {
        let cxy = ckBton.center()
        click(cxy.x, cxy.y)
        console.log('点击今日签到')
        sleep(2 * 1000)
    }
    console.log('弹出任务列表')
    //先点坐标
    let xy = taskBon.center()
    click(xy.x, xy.y)
    sleep(1000 * 2)
    ckBton = text('今日签到').findOne(2000)
    if (ckBton) {
        let cxy = ckBton.center()
        click(cxy.x, cxy.y)
        console.log('点击今日签到')
        sleep(2 * 1000)
    }

    taskBon.click()
    sleep(2 * 1000)

    let val = runTaskList()
    console.log('任务列表执行结果', val)
    if (!val) {
        return code
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
        autojsUtils.auth()
        autojsUtils.showMem()
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