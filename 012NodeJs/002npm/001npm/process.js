// console.log(global);
// console.log(process);
// console.log(process === global.process)

// 启动文件时的传参数组 1，nodejs路径 2，文件路径 3，传参
// console.log(process.argv)

// 用户环境对象  配置信息
// console.log(process.env)
// 进程PID
// console.log(process.pid)
// console.log(process.argv)
// console.log(process.env)
// console.log(process.pid)
console.log(1)
// 添加到下一个时间点的队列当中
process.nextTick(()=>{
	console.log(2)
})
console.log(3)

