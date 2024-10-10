const autojsUtils = require('../modules/autojs-utils');
const appName = 'com.taobao.idlefish'


const itemName = '咸鱼签到'
const itemName1 = '咸鱼曝光任务'
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

        // let c3 = text('明日再来').findOne(1000)
        // if (c3) {
        //     console.log('明日再来')
        //     return true
        // } else {
        return res
        // }
    }


    let p1s = null
    if (c1) {
        p1s = c1.parent().children()
    }

    if (c2) {
        p1s = c2.parent().children()
    }

    console.log('任务列表控件', `${p1s.length}`)
    let num = 0
    let last = []
    let bounds = null

    for (let i = 0; i < p1s.length; i++) {
        let nowI = i
        if (!text('明日再来').findOne(1000)) {
            console.log('任务跑飞。。。')
            return res
        }


        let title = (i + 1 < p1s.length) ? p1s[i + 1].text() : '没有标题了'
        console.log(`${title},[${i}],开始寻找任务入口`)
        let btn = null
        for (let j = nowI; j < (nowI + 15); j++) {
            if (!p1s[j]) {
                console.log('任务列表查询结束')
                break
            }
            i = j;
            let val = p1s[j].text()
            val = val ? val : ''

            if (val == '去完成' || val == '领取奖励' || val == '已完成') {
                btn = p1s[j]
                break;
            } else if (val.slice(2, 3) == ':') {
                console.log('这个能是时间', `${i}`, val)
                btn = p1s[j]
                break;
            }
        }

        if (btn) {
            console.log(title, '找到任务入口', `btn[${i}]`, `当前运行任务数${++num}`)


            if (num == 2) { //第二个任务需要记住坐标用于滑动
                bounds = btn.bounds()
            }

            if (bounds) {
                console.log('开始滑动')
                swipe(Math.ceil(width / 2), height - 300, Math.ceil(width / 2), height - 600, 1000)
                sleep(500 * 1)
            }

            if (btn.text() == '领取奖励') {
                btn.click()
                console.log('领取奖励,休息2秒')
                sleep(2000)
            } else if (btn.text() == '去完成') {
                if (title.slice(0, 3) == '去浏览') {
                    console.log('浏览型任务')
                    btn.click()
                    runBrowseTask(3)
                    back()
                    sleep(1000 * 2)
                } if (title == '搜一搜喜欢的商品') {
                    console.log('浏览型任务')
                    btn.click()
                    runBrowseTask(3)
                    back()
                    sleep(1000 * 2)
                } else if (title == '搜一搜推荐商品') {
                    console.log('搜索型浏览型任务')
                    btn.click()
                    runSearchBrowseTask(3)
                    back()
                    sleep(1000 * 2)
                } else if (title == '去参加一站到底') {
                    btn.click()
                    console.log('去参加一站到底,休息10秒')
                    sleep(1000 * 10)
                    back()
                    sleep(1000 * 2)
                } else if (title == '浏览指定频道好物') {
                    last.push(btn, title)
                } else {
                    console.log('其他任务,暂时不处理')
                }

            } else if (btn.text() == '已完成') {
                console.log('任务已完成')
            }
        }

    }
    if (last.length > 0) {
        let btn = last[0]
        let title = last[1]
        console.log('继续浏览指定频道好物', title)
        btn.click()
        runBrowseTask(4)
        sleep(1000 * 2)
        console.log('重启任务')
        return false
    }



    return true
}

//浏览型任务
function runBrowseTask(times) {
    sleep(1000 * 8)
    if (text('亲，请拖动下方滑块完成验证').findOne(5000)) {
        // sleep(1000 * 1)
        let xy = text('亲，请拖动下方滑块完成验证').findOne(2000).brother(2).child(0).child(0).child(0).child(1).center()
        console.log('需要滑动验证验证码====', xy)
        // gesture(1000, [xy.x, xy.y], [width - 100, xy.y])
        autojsUtils.randomSwipe(xy.x, xy.y, width - 100, xy.y)

    }
    for (let i = 0; i < times; i++) {
        let dstH = Math.floor(height / 3)
        let offsetW = Math.floor(Math.random() * 100)
        automator.swipe(Math.floor(width / 2) - offsetW, height - dstH, Math.floor(width / 2) + offsetW + Math.floor(Math.random() * 100), dstH, 6 * 1000);
        sleep(1000 * 1)
    }

}

//搜索浏览型任务
function runSearchBrowseTask(times) {
    sleep(1000 * 5)
    if (text('亲，请拖动下方滑块完成验证').findOne(5000)) {
        // sleep(1000 * 1)

        let xy = text('亲，请拖动下方滑块完成验证').findOne(2000).brother(2).child(0).child(0).child(0).child(1).center()
        console.log('需要滑动验证验证码====', xy)
        // gesture(1000, [xy.x, xy.y], [width - 100, xy.y])
        autojsUtils.randomSwipe(xy.x, xy.y, width - 100, xy.y)
    }
    console.log('查看推荐搜索')
    let list = className('ListView').findOne(2000)
    if (list) {
        let item = list.child(0)
        if (item) {

            let xy = item.bounds()
            click(xy.centerX(), xy.centerY())
            console.log('点击搜索结果')
            sleep(1000 * 2)
            runBrowseTask(times)
            console.log('返回搜索界面')
            back()
            sleep(1000 * 2)
        }
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
    console.log('打开app')
    sleep(1000 * 10)

    let myBton = text('我的').findOne(3000)

    if (!myBton) {
        console.log('未找到我的按钮')
        return code
    }
    let mxy = myBton.center()
    click(mxy.x, mxy.y)
    sleep(1000 * 2)
    click(mxy.x, mxy.y)
    sleep(1000 * 2)

    let myTrans = desc('我的交易').findOne(1000)

    if (!myTrans) {
        console.log('未找到我的交易')
        return code
    }

    let myPublish = myTrans.brother(2)

    if (!myPublish && myPublish.text() && myPublish.text().slice(0, 4) != '我的发布') {
        console.log('未找到我的发布')
        return code
    }
    myPublish.click()
    console.log('点击我的发布')
    sleep(1000 * 2)

    let check = desc('一键擦亮').findOne(2000)
    if (!check) {

        if (!desc('已擦亮').findOne(2000)) {
            console.log('未找到一键擦亮')
            return code
        }

    }
    if (desc('已擦亮').findOne(2000)) {
        back()
    } else {
        let cxy = check.center()
        click(cxy.x, cxy.y)
        console.log('点击一键擦亮')
        sleep(1000 * 2)
        back()
    }

    console.log('返回我的')
    sleep(1000 * 2)

    myBton = text('我的').findOne(3000)
    if (!myBton) {
        console.log('未找到我的按钮。返回失败')
        return code
    }
    //向下滑动一点
    console.log('向下滑动一点')
    swipe(Math.ceil(width / 2), Math.ceil(height / 2) + 500, Math.ceil(width / 2), Math.ceil(height / 2), 1000)
    sleep(1000 * 2)
    //查找咸鱼币

    let xianyuMy = desc('我的简历').findOne(2000)
    if (!xianyuMy) {
        console.log('未找到我的简历')
        return code
    }

    let xianyuCoin = xianyuMy.parent().parent().parent().brother(1)
    if (!xianyuCoin) {
        console.log('未找到闲鱼币入口')
        return code
    }
    xianyuCoin.click()
    sleep(15 * 1000)
    //
    console.log('打开任务栏')
    let chioce = depth(14).className('Image').findOne(1000) //第一个就是
    if (!chioce) {
        console.log('没有找到需要按钮的覆盖层图片')
        return code
    }

    let btns = chioce.brother(1).children()
    if (!btns && btns.length != 5) {
        console.log('没有按钮')
        return code
    }
    btns.forEach(element => {
        // 12:41:17.291/D: Rect(877, 1086 - 1080, 1270)
        // 12:41:17.293/D: Rect(695, 1086 - 987, 1270)
        // 12:41:17.294/D: Rect(11, 1086 - 299, 1270)
        // 12:41:17.296/D: Rect(192, 1086 - 481, 1270)
        // 12:41:17.297/D: Rect(374, 968 - 698, 1270)
        console.log(element.className(), element.bounds()) //0-鱼乐园 1-赚塞子 2-开宝箱 3-背包 4-扔色子寻宝 
    });

    btns[1].click()
    // console.log(text('签到').findOne(2000))
    if (text('签到').findOne(2000)) {
        console.log('签到', text('签到').findOne(2000).click())
    }

    let val = runTaskList()
    console.log('任务列表执行结果', val)
    if (!val) {
        return code
    }

    // 点击一下攻略
    let gl = text('攻略').findOne(2000)
    if (!gl) {
        console.log('没有攻略按钮')
        return code
    }
    let glxy = gl.center()
    click(glxy.x, glxy.y)
    sleep(1000 * 2)
    if (text('领取酬金').findOne(2000)) {
        console.log('点击领取酬金')
        text('领取酬金').findOne(2000).click()
        sleep(5 * 1000)
    }
    let chioce1 = depth(14).className('Image').findOne(1000) //第一个就是
    if (!chioce1) {
        console.log('没有找到需要按钮的覆盖层图片，跑飞了')
        return code
    }
    let btn1s = chioce1.brother(1).children()
    if (!btn1s && btn1s.length != 5) {
        console.log('没有任务按钮，跑飞了')
        return code
    }

    for (let index = 0; index < 5; index++) {
        if (text('赚').findOne(1000)) {
            console.log('没色子了，退出')
            break
        }

        if (text('×2').findOne(1000)) {
            console.log('就2个色子了,退出')
            break
        }

        if (!text('用闲鱼币兑权益').findOne(1000)) {
            console.log('用闲鱼币兑权益找不到可能退出了')
            break
        }

        console.log('执行第', index + 1, '次', '开始投色子')
        let xy = btn1s[4].center()
        click(xy.x, xy.y)
        sleep(1000 * 10)

        if (text('开始抽奖').findOne(1000)) {
            console.log('点击开始抽奖')
            text('开始抽奖').findOne(1000).click()
            sleep(1000 * 5)
        }

        if (text('开始刮奖').findOne(1000)) {
            console.log('点击开始刮奖')
            text('开始刮奖').findOne(1000).click()
            sleep(1000 * 12)
        }

        if (text('收下礼物').findOne(1000)) {
            text('收下礼物').findOne(1000).click()
            sleep(1000 * 5)
        }
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
                console.log(`${itemName}任务执行失败, 再次执行`)
            } else {
                break
            }
        }

        // task1()
    } catch (error) {
        console.error('catch====', error)
    } finally {
        if (flag) {

        }
    }
}