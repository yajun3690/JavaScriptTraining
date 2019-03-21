const fs = require('fs')

const fd =fs.openSync('./01.text','r');

const f =  fs.readSync(fd,buf,0,100,0)

console.log(f)

fs.closeSync(fd);












// 同步读取小文件，大文件会阻塞运行

// const a= fs.readFileSync('./01.text',{flag:'r'});

// console.log(a)