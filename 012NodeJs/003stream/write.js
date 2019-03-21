// 异步写入文件

const fs = require('fs')
// 1
fs.open('03.text','w',(ero,fd)=>{
	if(ero){
		console.log('open error::...')
	}else{
			console.log('open success')
			fs.write('wehwhew',(ero)=>{
				if(ero){
					console.log('write error::::')
				}else{
					console.log('write success')
				}
				fs.close('03.text',(ero)=>{
					if(ero){
						console.log('close error::::')
					}else{
						console.log('close success')
					}		
				})
		})
	}
})





// 2,简化
// fs.writeFile('02.text','hewwww',{flag:'w'},(ero)=>{

// 	if(ero){
// 		console.log('write error.....')
// 	}else{
// 		console.log('write success')
// 	}



// })
console.log('ccccc')