const EventEmit  = require('events')



class Emit extends EventEmit{

} 


const eee  = new Emit();

eee.on('test',(val)=>{

	console.log(val)
})
eee.emit('test','cccc');