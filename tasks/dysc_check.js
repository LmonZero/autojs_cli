const autojsUtils = require('../modules/autojs-utils');
autojsUtils.auth()

const appName = 'com.dragon.read'

const itemName = '番茄刷听书时长'

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
    sleep(1000 * 10)


    let my = text('书架').findOne(2000)
    if (!my) {
        console.log('没有找到书架')
        return code
    }

    let xy = my.center()
    click(xy.x, xy.y)
    sleep(5 * 1000)

    if (!text('刷听书时长').findOne(2000)) {
        if (!text('分组').findOne(2000)) {
            console.log('没有找到分组')
            return code
        }
        xy = text('分组').findOne(2000).center()
        console.log('点击分组')
        click(xy.x, xy.y)
        sleep(5 * 1000)
    }

    if (!text('刷听书时长').findOne(2000)) {
        console.log('没找到<刷听书时长>分组')
        return code
    }
    xy = text('刷听书时长').findOne(2000).center()
    console.log('点击<刷听书时长>分组,麻烦添加一下')
    click(xy.x, xy.y)
    sleep(5 * 1000)

    console.log('查看当前分组第一本书')
    let val = text('刷听书时长').findOne(2000)

    if (!val) {
        console.log('估计跑飞了')
        return code
    }
    let book = val.parent().parent().parent().brother(1).child(0).child(0)
    console.log('点击当前分组第一本书')
    if (!book) {
        console.log('没有找到书,跑飞了')
        return code
    }
    xy = book.center()
    click(xy.x, xy.y)
    sleep(10 * 1000)

    console.log('开始刷时长')

    for (let index = 0; index < 6; index++) {
        try {
            console.log('第', index + 1, '次刷时长')
            if (text('关闭').findOne(5000)) {
                console.log('关闭刚刚进去听书界面视频')
                let xy = text('关闭').findOne(1000).center()
                click(xy.x, xy.y)
                sleep(2 * 1000)
            }

            if (text('稍后领时长').findOne(5000)) {
                console.log('可领取时长到了上限')
                break;
            }

            if (text('立即观看').findOne(5000)) {
                console.log('点击立即观看')
                text('立即观看').findOne(1000).click()
            } else {
                if (text('看视频得60分钟').findOne(2000)) {
                    console.log('点击看视频得60分钟')
                    let xy = text('看视频得60分钟').findOne(1000).center()
                    click(xy.x, xy.y)
                    sleep(2 * 1000)
                }
                if (text('立即观看').findOne(3000)) {
                    console.log('点击立即观看')
                    text('立即观看').findOne(1000).click()
                }
            }

            sleep(1000 * 5)
            if (text('直播间观看时长计入奖励时长').findOne(2000)) {
                console.log('<直播类型广告>')
                console.log('点击直播间观看时长计入奖励时长')
                let xy = text('直播间观看时长计入奖励时长').findOne(1000).center()
                click(xy.x, xy.y)
                sleep(1000 * 2)
                if (text('直播间观看时长计入奖励时长').findOne(2000)) {
                    console.log('没有进入直播间')
                    let xy = text('直播间观看时长计入奖励时长').findOne(1000).center()
                    click(xy.x, xy.y)
                    sleep(1000 * 2)
                }
                console.log('休眠20秒')
                sleep(1000 * 20)

            } else if (text('广告').findOne(2000)) {
                console.log('<视频类型广告>')
                console.log('休眠35秒')
                sleep(35 * 1000)
                back()
                sleep(1000 * 2)

            } else {
                console.log('没有找到广告')
            }

            let times = 8
            for (let index = 0; index < times; index++) {
                if (text('关闭').findOne(2000)) {
                    console.log('关闭界面视频')
                    let xy = text('关闭').findOne(1000).center()
                    click(xy.x, xy.y)
                    sleep(1 * 1000)
                }
                if (text('看视频得60分钟').findOne(2000) || text('稍后领时长').findOne(2000)) {
                    console.log('返回主界面')
                    break;
                } else {
                    if (index == times - 1) {
                        console.log('返回失败跑飞了')
                        return code; //再次使用
                    }
                    back()
                    sleep(1000 * 2)
                    if (text('继续观看').findOne(1000)) {
                        console.log('点击继续观看')
                        let xy = text('继续观看').findOne(1000)
                        click(xy.x, xy.y)
                        console.log('休眠5秒')
                        sleep(1000 * 5)
                    }
                }
            }

            sleep(1000 * 2)
        } catch (error) {
            console.error('第', index + 1, '次刷时长err', error)
        }

    }






    autojsUtils.close(appName)
    home()
    console.log(`执行${itemName}任务结束`);
    return 1
}

module.exports = () => {
    let flag = false
    try {
        flag = autojsUtils.unlock('lmon.com')
        autojsUtils.media(0)
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
        autojsUtils.media(0.2)
    }
}