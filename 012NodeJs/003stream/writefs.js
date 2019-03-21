const fs  = require('fs')


const fd = fs.openSync('./01.text','w');

	fs.writeSync(fd,'hellow2');

	fs.closeSync(fd);

// fs.writeFileSync('./01.text','hellow',{flags:'w'})