const xianyu_check = require('./tasks/xianyu_check');
const dewu_check = require('./tasks/dewu_check');


console.log('得物任务')
dewu_check()
console.log('1 dewu_check 1s')
sleep(1000)
dewu_check()
console.log('2 dewu_check 1s')
sleep(1000)
dewu_check()
console.log('3 dewu_check 1s')
sleep(1000)


console.log('闲鱼任务')

xianyu_check()
console.log('1 xianyu_check 1s')
sleep(1000)

xianyu_check()
console.log('2 xianyu_check 1s')
sleep(1000)



console.log('得物任务')
dewu_check()
console.log('1 dewu_check 1s')
sleep(1000)
dewu_check()
console.log('2 dewu_check 1s')
sleep(1000)
dewu_check()
console.log('3 dewu_check 1s')
sleep(1000)

console.log('闲鱼任务')
xianyu_check()
console.log('1 xianyu_check 1s')
sleep(1000)

xianyu_check()
console.log('2 xianyu_check 1s')
sleep(1000)