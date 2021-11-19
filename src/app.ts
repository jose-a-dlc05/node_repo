const fs = require('fs');
const zlib = require('zlib');

// Zip a file
// const gzip = zlib.createGzip(); // returns a transform stream

// Unzip a file
const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example2.txt.gz', 'utf-8'); // returns a readable stream
const readStream = fs.createReadStream('./example2.txt.gz'); // returns a readable stream
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream); // Takes the content from example.txt and transfers it over to example2.txt
