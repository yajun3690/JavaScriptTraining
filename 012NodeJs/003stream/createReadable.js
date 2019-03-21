const {Readable} = require('stream')


class Myread extends Readable{
		constructor(){
			super();
			this.index = 0;
		}
		_read(){
			this.index++;
			if(this.index>5){
				read.push(null)
			}else{
				const str = this.index+ '';
				read.push(str)
			}

		}
}




const read = new Myread();


read.on('data',(chunk)=>{
	console.log(chunk)

})


read.on('end',()=>{
	console.log('finish.....')
})

// read.pipe(process.stdout)