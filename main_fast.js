const dysc_check = require('./tasks/dysc_check');
const dysc_yanhao = require('./tasks/dysc_yanhao');

const kuaishou_check = require('./tasks/kuaishou_check');
const kuaishou_yanhao = require('./tasks/kuaishou_yanhao');

const dyjishu_check = require('./tasks/dyjishu_check');
const dyjishu_yanhao = require('./tasks/dyjishu_yanhao');

const dy_check = require('./tasks/dy_check');
const dy_yanhao = require('./tasks/dy_yanhao');


let all = 1

for (let j = 0; j < 3; j++) {
    let times1 = 1


    for (let i = 0; i < times1; i++) {
        console.log('抖音极速任务', i, 'all', all++)
        dyjishu_check()
        console.log('1 dyjishu_check 1s')
        sleep(1000)
    }

    for (let i = 0; i < times1; i++) {
        if (i == 0) {
            console.log('抖音商城养号任务', i, 'all', all++)
            dysc_yanhao()
            sleep(1000)
        }
        console.log('抖音商城任务', i, 'all', all++)
        dysc_check()
        console.log('1 dysc_check 1s')
        sleep(1000)
    }

    for (let i = 0; i < times1; i++) {
        if (i == 0) {
            console.log('抖音极速养号任务', i, 'all', all++)
            dyjishu_yanhao()
            sleep(1000)
        }
        console.log('抖音极速任务', i, 'all', all++)
        dyjishu_check()
        console.log('1 dyjishu_check 1s')
        sleep(1000)
    }


    for (let i = 0; i < times1; i++) {
        if (i == 0) {
            console.log('抖音商城养号任务', i, 'all', all++)
            dysc_yanhao()
            sleep(1000)
        }
        console.log('抖音商城任务', i, 'all', all++)
        dysc_check()
        console.log('1 dysc_check 1s')
        sleep(1000)
    }

    for (let i = 0; i < times1; i++) {
        console.log('快手极速任务', i, 'all', all++)
        kuaishou_check()
        console.log('kuaishou_check 1s')
        sleep(1000)
    }


    for (let i = 0; i < times1; i++) {
        console.log('抖音正常任务', i, 'all', all++)
        dy_check()
        console.log('1 dyjishu_check 1s')
        sleep(1000)
    }


    for (let i = 0; i < times1; i++) {
        console.log('抖音商城任务', i, 'all', all++)
        dysc_check()
        console.log('1 dysc_check 1s')
        sleep(1000)
    }


    for (let i = 0; i < times1; i++) {
        console.log('快手极速任务', i, 'all', all++)
        kuaishou_check()
        console.log('kuaishou_check 1s')
        sleep(1000)
    }


    console.log('ok2222222222222222')

    let times3 = 1

    for (let i = 0; i < times3; i++) {
        console.log('抖音商城任务', i, 'all', all++)
        dysc_check()
        console.log('1 dysc_check 1s')
        sleep(1000)
    }

    for (let i = 0; i < times3; i++) {
        console.log('抖音极速任务', i, 'all', all++)
        dyjishu_check()
        console.log('1 dyjishu_check 1s')
        sleep(1000)
    }

    for (let i = 0; i < times3; i++) {
        console.log('抖音商城任务', i, 'all', all++)
        dysc_check()
        console.log('1 dysc_check 1s')
        sleep(1000)
    }


    for (let i = 0; i < times3; i++) {
        console.log('抖音正常任务', i, 'all', all++)
        dy_check()
        console.log('1 dyjishu_check 1s')
        sleep(1000)
    }

    for (let i = 0; i < times3 + 1; i++) {
        console.log('快手极速任务', i, 'all', all++)
        kuaishou_check()
        console.log('kuaishou_check 1s')
        sleep(1000)
    }


    for (let i = 0; i < times3; i++) {
        console.log('抖音极速任务', i, 'all', all++)
        dyjishu_check()
        console.log('1 dyjishu_check 1s')
        sleep(1000)
    }


    for (let i = 0; i < times3; i++) {
        console.log('抖音商城任务', i, 'all', all++)
        dysc_check()
        console.log('1 dysc_check 1s')
        sleep(1000)
    }


    for (let i = 0; i < times3 + 1; i++) {
        console.log('快手极速任务', i, 'all', all++)
        kuaishou_check()
        console.log('kuaishou_check 1s')
        sleep(1000)
    }

}


exit()
