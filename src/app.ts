// 1. import readline module
// 2. Declare rl and initialize it with the method createInterface from readline
//    a. Make sure it takes in object to be able to read input and log output
// 3. Declare and initialize two variables num1 and num2 and instantiate them with random whole numbers using: Math.floor((Math.random() * 10) + 1)
// 4. Declare an answer variable with num1 and num2
// 5. Using the question method from readline, prompt the following question:
//    a. What is num1 + num2
// 6. If the answer is correct, close the program with 'Correct!' logged out.
// 7. If the answer is incorrect, log 'Incorrect, please try again.'
// Note: Make sure to not have the program close until the correct answer is provided.
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

// the question method displays the query by writing it to the output, waits for user input to be provided on input, then invokes the callback function passing the provided input as the first argument.
rl.question(`What is ${num1} + ${num2}?\n`, (userInput: string) => {
	if (userInput.trim() === answer.toString()) {
		console.log(`Correct!!!`);
		rl.close(); // this method closes the InterfaceConstructor** instance and relinquishes control over the input and output streams. When called, the 'close' event will be emitted.
	} else {
		console.log(`Incorrect, please try again!`);
		rl.on('line', (userInput: string) => {
			if (userInput.trim() === answer.toString()) {
				console.log(`Correct!!!`);
				rl.close();
			} else {
				rl.setPrompt(`Incorrect, you've entered ${userInput}, try again.\n`);
				rl.prompt();
			}
		});
	}
});

// InterfaceConstructor extends the EventEmitter class where instances are constructed using the readlinePromises.createInterface() or readline.createInterface() method.
