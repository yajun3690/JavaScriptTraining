const {Writable} = require('stream')


class MyWritable extends Writable{

	_write(chunk,encoding,cab){


		console.log(chunk);

		cab && cab();

	}


}
const writ = new MyWritable();


writ.on('finish',()=>{
	console.log('finish.....')
})

writ.write('hellow',()=>{
	console.log('hellow....')
})
writ.write('kuazhu');


writ.end();

