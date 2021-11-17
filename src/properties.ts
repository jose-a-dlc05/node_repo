const sum = (number1: number, number2: number): number => {
	return number1 + number2;
};

const PI: number = 3.14;

class someRandomClass {
	constructor() {
		console.log('Object created');
	}
}

// One Way - Repetitive
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.someRandomClass = someRandomClass;

// Another way
module.exports = {
	sum,
	PI,
	someRandomClass,
};
