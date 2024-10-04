const xianyu_check = require('./tasks/xianyu_check');
const dewu_check = require('./tasks/dewu_check');
const wsBank_check = require('./tasks/wsBank_check');
const dianxing_check = require('./tasks/dianxing_check');
const tenxun_check = require('./tasks/tenxun_check');
const fanqie_check = require('./tasks/fanqie_check');



console.log('得物任务')
dewu_check()
console.log('1 dewu_check 1s')
sleep(1000)
dewu_check()
console.log('2 dewu_check 1s')
sleep(1000)


console.log('闲鱼任务')
xianyu_check()
console.log('1 xianyu_check 1s')
sleep(1000)

xianyu_check()
console.log('2 xianyu_check 1s')
sleep(1000)

console.log('腾讯任务')
tenxun_check()
console.log('1 tenxun_check 1s')
sleep(1000)


console.log('得物任务')
dewu_check()
console.log('1 dewu_check 1s')
sleep(1000)
dewu_check()
console.log('2 dewu_check 1s')
sleep(1000)


console.log('闲鱼任务')
xianyu_check()
console.log('1 xianyu_check 1s')
sleep(1000)


console.log('网商银行任务')
wsBank_check()
console.log('1 wsBank_check 1s')
sleep(1000)


console.log('得物任务')
dewu_check()
console.log('1 dewu_check 1s')
sleep(1000)
dewu_check()
console.log('2 dewu_check 1s')
sleep(1000)

console.log('电信任务')
dianxing_check()
console.log('1 dianxing_check 1s')
sleep(1000)
console.log('番茄任务')
fanqie_check()
console.log('1 fanqie_check 1s')
sleep(1000)


console.log('得物任务')
dewu_check()
console.log('1 dewu_check 1s')
sleep(1000)
// dewu_check()
// console.log('2 dewu_check 1s')
// sleep(1000)

console.log('咸鱼任务')
xianyu_check()
console.log('1 xianyu_check 1s')
sleep(1000)

// xianyu_check()
// console.log('2 xianyu_check 1s')
// sleep(1000)

console.log('腾讯视频任务')
tenxun_check()
console.log('1 tenxun_check 1s')
sleep(1000)

exit()
