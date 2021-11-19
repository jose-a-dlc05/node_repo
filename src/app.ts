const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./example.txt', 'utf-8'); // returns a readable stream
const writeStream = fs.createWriteStream('example3.txt');
readStream.on('data', (chunk: string) => {
	writeStream.write(chunk);
});
// const writeStream = fs.createWriteStream('example2.gz');
// readStream.pipe(gzip).pipe(writeStream);
