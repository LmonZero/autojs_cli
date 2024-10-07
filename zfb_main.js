const zfb_check = require('./tasks/zfb_check');

zfb_check()
console.log('1 zfb_check 1s')
sleep(1000)

zfb_check()
console.log('2 zfb_check 1s')
sleep(1000)

exit()
