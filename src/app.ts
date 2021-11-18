// 1. Declare a const called fs and initialize it with the 'fs' import to import the file system module
const fs = require('fs');

// 2. Create a scenario where you create a folder and then a file within that folder

// fs.mkdir('example', (err: string) => {
// 	err
// 		? console.log(err)
// 		: fs.writeFile(
// 				'./example/greetings.ts',
// 				'const spanishGreeting: string = "Hola Mundo!"',
// 				(err: string) => {
// 					err ? console.log(err) : console.log('File successfully deleted');
// 				}
// 		  );
// });

// 3. Create a scenario where you delete a file within the folder and then the folder itself

// fs.unlink('./example/greetings.ts', (err: string) => {
// 	err
// 		? console.log(err)
// 		: fs.rmdir('./example', (err: string) => {
// 				err
// 					? console.log(err)
// 					: console.log('File and folder successfully deleted');
// 		  });
// });

// 4. Create a scenario where you can delete multiple files within a folder and then delete the folder itself
// This code down here creates a folder with the elements inside the files array
// const files: string[] = ['a.txt', 'b.txt'];
// fs.mkdir('example', (err: string) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		for (let i = 0; i < files.length; i++) {
// 			fs.writeFile('./example/' + files[i], 'Example', (err: string) => {
// 				err ? console.log(err) : console.log('File successfully created');
// 			});
// 		}
// 	}
// });

fs.readdir('./example', (err: string, files: string[]) => {
	if (err) {
		console.log(err);
	} else {
		// This loop removes the files within the folder
		for (let file of files) {
			fs.unlink('./example/' + file, (err: string) => {
				if (err) {
					console.log(err);
				} else {
					console.log(`${file} deleted`);
				}
			});
		}
		// This code removes the folder
		fs.rmdir('./example', (err: string) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Folder deleted successfully');
			}
		});
	}
});
