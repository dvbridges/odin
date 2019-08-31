// This script demonstrates different software design patterns for JS Objects

/* Object constructor 
 *
 * Object contructors are a common design pattern in JS. However,
 * whilst they look like regular functions, they may not behave correctly if
 * instantiated incorrectly, and may not throw errors. After reviewing constructors,
 * we turn to factory functions and the module pattern as a preferred design choice.
 */


/* Prototypes and inheritance using object constructors
 * Define your function/class methods on the prototype
 * Thus creating each method only once for each object, increasing scalability
 */

function Animal() {
}

Animal.prototype.isPredator = function() {
	console.log(`${this.name} is a predator: ${this.predator}`)
}

/* Recommended method for prototypal inheritance
 * Dog inherits prototype / methods from Animal
 */

function Dog(name, age, predator) {
	this.name = name;
	this.age = age; // years
	this.predator = predator; 
}

// Create a new object for prototyping for each subclass
Dog.prototype = Object.create(Animal.prototype)
puppy = new Dog("Marley", "1", false)
puppy.isPredator();

