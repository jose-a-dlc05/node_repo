const EventEmitter = require('events');
const eventEmitter = new EventEmitter(); // All objects that emit events are instances of the EventEmitter class

// This function allows one more functions to be attached to named event emitted by the object.
eventEmitter.on('sum', (): void => {
	console.log(1 + 2);
});

eventEmitter.on('subtract', (num1: number, num2: number): void => {
	console.log(num1 - num2);
});

eventEmitter.emit('sum');
eventEmitter.emit('subtract', 10, 9);

class Person extends EventEmitter {
	constructor(name: string) {
		super();
		this._name = name;
	}

	get name(): string {
		return this._name;
	}
}

const jose = new Person('jose');
const jazz = new Person('jazz');
eventEmitter.on('name', (name: string): void => {
	console.log(`This is ${name}`);
});
eventEmitter.emit('name', jose.name);
eventEmitter.emit('name', jazz.name);
