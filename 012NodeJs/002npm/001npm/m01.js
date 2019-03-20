// console.log(process.argv)
// console.log(process.env)
// console.log(process.pid)
// console.log(1)
// process.nextTick(()=>{
// 	console.log(2)
// })
// console.log(3)
const buf = Buffer.from('你好')
const buf2 = Buffer.from('fdgdgfd')
console.log(buf)
console.log(buf2)
const buf1 = Buffer.alloc(5);
buf1[0] =1;
console.log(buf1)
const buf3 = Buffer.alloc(5);
buf3[0] =0xff;
console.log(buf3)
const buf4 = Buffer.alloc(10)
buf4[1] = 10;
console.log(buf4)