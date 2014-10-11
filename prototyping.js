
// Prototyping

var Car = {
	wheels: 4,
	engine: {
		cylinders: 4,
		type: 'gas'
	}
};

var myCar = new Car;

myCar.prototype.make = 'Honda';
myCar.prototype.model = 'Accord';

console.log(myCar);

// outputs: { wheels: 4, engine: { cylinders: 4, type: 'gas' }, make: 'Honda', model: 'Accord' }

// or can make a prototyping function

function person(name, born, job) {
	this.name = name;
	this.born = born;
	this.job = job;
}

var John = new person('John Smith', 1968, 'Programmer');
John.prototype.phone = '555-789-1234';

console.log(John);

// outputs: { name: 'John Smith', born: 1968, phone: '555-789-1234' }