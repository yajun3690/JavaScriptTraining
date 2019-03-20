const EventEmitter =require('events');

class emit extends EventEmitter{

}

const eee = new emit();

console.log(eee)

// ett.on('test',()=>{

// })
// ett.emit('test')
//设置最大绑定事件个数
eee.setMaxListeners(11)
eee.on('test',()=>{
	console.log('1:','hellow')
})
eee.on('test',()=>{
	console.log('2:','hellow')
})
eee.on('test',()=>{
	console.log('3:','hellow')
})
eee.on('test',()=>{
	console.log('4:','hellow')
})
eee.on('test',()=>{
	console.log('5:','hellow')
})
eee.on('test',()=>{
	console.log('6:','hellow')
})
eee.on('test',()=>{
	console.log('7:','hellow')
})
eee.on('test',()=>{
	console.log('8:','hellow')
})
eee.on('test',()=>{
	console.log('9:','hellow')
})
eee.on('test',()=>{
	console.log('10:','hellow')
})
eee.on('test',(arr1,arr2)=>{
	console.log('11:','hellow')
	console.log(arr1,arr2)
})
// 1,利用数组扩展运算传参
const arr = ['hellow','kuazhu']
// 2,对应传参，自定义事件传参没有enent
// eee.emit('test','hellow','kuazhu')
eee.emit('test',...arr)