import { IncomingMessage, ServerResponse } from 'http';

const http = require('http');
const fs = require('fs');

http
	.createServer((req: IncomingMessage, res: ServerResponse) => {
		const readStream = fs.createReadStream('./static/example.jpg');
		res.writeHead(200, { 'Content-Type': 'image/jpg' });
		readStream.pipe(res);
	})
	.listen(3000);
