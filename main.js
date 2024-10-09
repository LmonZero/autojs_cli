const xianyu_check = require('./tasks/xianyu_check');
const dewu_check = require('./tasks/dewu_check');
const wsBank_check = require('./tasks/wsBank_check');
const dianxing_check = require('./tasks/dianxing_check');
const tenxun_check = require('./tasks/tenxun_check');
const fanqie_check = require('./tasks/fanqie_check');
const lianxiang_check = require('./tasks/lianxiang_check');
const zdm_check = require('./tasks/zdm_check');

const dysc_check = require('./tasks/dysc_check');
const dysc_yanhao = require('./tasks/dysc_yanhao');

const kuaishou_check = require('./tasks/kuaishou_check');
const kuaishou_yanhao = require('./tasks/kuaishou_yanhao');

const zfb_check = require('./tasks/zfb_check');
const zfb_yanhao = require('./tasks/zfb_yanhao');

const dyjishu_check = require('./tasks/dyjishu_check');
const dyjishu_yanhao = require('./tasks/dyjishu_yanhao');

const dy_check = require('./tasks/dy_check');
const dy_yanhao = require('./tasks/dy_yanhao');


let all = 1


for (let i = 0; i < 1; i++) {
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

for (let i = 0; i < 3; i++) {
    console.log('得物任务', i, 'all', all++)
    dewu_check()
    console.log('1 dewu_check 1s')
    sleep(1000)
}

for (let i = 0; i < 2; i++) {
    console.log('闲鱼任务', i, 'all', all++)
    xianyu_check()
    console.log('1 xianyu_check 1s')
    sleep(1000)
}

for (let i = 0; i < 3; i++) {
    console.log('得物任务', i, 'all', all++)
    dewu_check()
    console.log('1 dewu_check 1s')
    sleep(1000)
}

for (let i = 0; i < 1; i++) {
    console.log('网商银行任务', i, 'all', all++)
    wsBank_check()
    sleep(1000)

    console.log('什么值得买任务', i, 'all', all++)
    zdm_check()
    sleep(1000)

    console.log('联想任务', i, 'all', all++)
    lianxiang_check()
    sleep(1000)
}

for (let i = 0; i < 1; i++) {
    console.log('电信任务', i, 'all', all++)
    dianxing_check()
    sleep(1000)
}

for (let i = 0; i < 1; i++) {
    console.log('得物任务', i, 'all', all++)
    dewu_check()
    console.log('1 dewu_check 1s')
    sleep(1000)
}


for (let i = 0; i < 1; i++) {
    console.log('网商银行任务', i, 'all', all++)
    wsBank_check()
    sleep(1000)

    console.log('什么值得买任务', i, 'all', all++)
    zdm_check()
    sleep(1000)

    console.log('联想任务', i, 'all', all++)
    lianxiang_check()
    sleep(1000)
}
for (let i = 0; i < 2; i++) {
    console.log('番茄任务', i, 'all', all++)
    fanqie_check()
    console.log('1 fanqie_check 1s')
    sleep(1000)
}

for (let i = 0; i < 1; i++) {
    console.log('得物任务', i, 'all', all++)
    dewu_check()
    console.log('1 dewu_check 1s')
    sleep(1000)
}

for (let i = 0; i < 3; i++) {
    console.log('腾讯视频任务', i, 'all', all++)
    tenxun_check()
    console.log('1 tenxun_check 1s')
    sleep(1000)
}

for (let i = 0; i < 1; i++) {
    console.log('电信任务', i, 'all', all++)
    dianxing_check()
    sleep(1000)
}


for (let i = 0; i < 1; i++) {
    console.log('得物任务', i, 'all', all++)
    dewu_check()
    console.log('1 dewu_check 1s')
    sleep(1000)
}

for (let i = 0; i < 3; i++) {
    if (i == 0) {
        console.log('支付宝养号任务', i, 'all', all++)
        zfb_yanhao()
        sleep(1000)
    }
    console.log('支付宝任务', i, 'all', all++)
    zfb_check()
    sleep(1000)
}

for (let i = 0; i < 1; i++) {
    if (i == 0) {
        console.log('抖音正常养号任务', i, 'all', all++)
        dy_yanhao()
        sleep(1000)
    }
    console.log('抖音正常任务', i, 'all', all++)
    dy_check()
    console.log('1 dyjishu_check 1s')
    sleep(1000)
}

for (let i = 0; i < 1; i++) {
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



for (let i = 0; i < 1; i++) {
    if (i == 0) {
        console.log('抖音正常养号任务', i, 'all', all++)
        dy_yanhao()
        sleep(1000)
    }
    console.log('抖音正常任务', i, 'all', all++)
    dy_check()
    console.log('1 dyjishu_check 1s')
    sleep(1000)
}

for (let i = 0; i < 3; i++) {
    if (i == 0) {
        console.log('快手极速养号任务', i, 'all', all++)
        kuaishou_yanhao()
        sleep(1000)
    }
    console.log('快手极速任务', i, 'all', all++)
    kuaishou_check()
    console.log('kuaishou_check 1s')
    sleep(1000)
}

for (let i = 0; i < 1; i++) {
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

for (let i = 0; i < 3; i++) {
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

for (let i = 0; i < 1; i++) {
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

for (let i = 0; i < 3; i++) {
    if (i == 0) {
        console.log('快手极速养号任务', i, 'all', all++)
        kuaishou_yanhao()
        sleep(1000)
    }
    console.log('快手极速任务', i, 'all', all++)
    kuaishou_check()
    console.log('kuaishou_check 1s')
    sleep(1000)
}


exit()
