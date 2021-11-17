// 1. Declare a const called fs and initialize it with the 'fs' import to import the file system module
const fs = require('fs');
// 2. Create and read a file using the writeFile method from file system module
// fs.writeFile('myFile.txt', 'Hi everyone, this is my file!', (err: string) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('file has been created');
// 		fs.readFile('myFile.txt', 'utf-8', (err: string, data: string) => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				console.log(data);
// 			}
// 		});
// 	}
// });
fs.writeFile('test.ts', 'const greeting = "hello world"', (err: string) => {
	err ? console.log(err) : console.log('File created successfully');
});
// 3. Rename a file using the readFile method from file system module
// fs.rename('myFile.txt', 'myIntro.txt', (err: string) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('File has been renamed successfully.');
// 	}
// });

// 4. Append content to the file using the appendFile method from file system module
// fs.appendFile(
// 	'myIntro.txt',
// 	' I will be a huge success to the world by the time I am 40!',
// 	(err: string) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log('Content successfully appended to file.');
// 		}
// 	}
// );
// 5. Delete file using the unlink method from file system module
// fs.unlink('myIntro.txt', (err: string) => {
// 	err ? console.log(err) : console.log('File successfully deleted!');
// });
