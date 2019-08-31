/* Object constructors use `new` to create new objects 
 * Factor functions simply set up and return objects
 */


// Factory function animal factory 
const AnimalFactory = (name, age, predator) => {
	// Private variables
	const upperCasePred = `${predator}`.toUpperCase()

	// Public variables
	const isPredator = () => console.log(`${name} is a ferocious factory function predator: ${upperCasePred}.`);
	return {name, age, isPredator}
}

// The equivalent object constructor animal factory (more verbose)
function AnimalConstructor (name, age, predator) {
	this.name = name
	this.age = age
	this.isPredator = () => console.log(`${name} is a ferocious object constructor predator: ${predator}.`);
}

// Factory
FactoryDog = AnimalFactory("Marley", 2, false);
FactoryDog.isPredator();

// Constructor
ConstructorDog = new AnimalConstructor("Marley", 2, false);
ConstructorDog.isPredator();


/* Private variables and functions
 * You can create local variables and functions in the factory function,
 * and create privacy by only returning the public functions
 *
 * Notice in the factory function, upperCasePred is not returned in the object.
 * This makes it private, inaccessible. However it can be accessed by the isPredator function.
 * This demonstrates two concepts, closure and scope chain. 
 *		closure : isPredator has access to everything inside of AnimalFactory, even if it gets called outside of that function.
 *		Scope chain: Outer scope is accessible by inner scope, but not vice versa. That is, 
 *		upperCasePred is accessible in the local scope of the isPredator function, but variables defined in the 
 *		isPredator function are not directly accessible outside of it.
 */

// Another example - count is a private variable and inaccessible, except to the returned object. That is closure.

const CounterFactory = () => {
	var count = 0;
	return () => {
		console.log(count);
		count++;
	}
}

const counter = CounterFactory()

counter() // 0
counter() // 1
counter() // 2
counter() // 3

/* Inheritance with factories
 * There are some simple ways to use inheritance with factory functions
 * The first method (Nerd) allows you to choose which properties the subclass inherits e.g., sayName.
 * The second method (NewNerd) lumps the whole parent object into the object using Object.assign(...)
 */

const Person = (name, age) => {
	const sayName = () => {console.log(name)}
	const sayAge = () => {console.log(age)}
	return {sayName, sayAge}
}

const Nerd = (name,age) => {
	const {sayName} = Person(name, age); // Only inherit sayName
	const nerdTic = () => {console.log("IM A NERD")}
	return {sayName, nerdTic};
}

const NewNerd = (name, age) => {
	const prototype = Person(name, age);
	const nerdTic = () => {console.log("IM A NEW TYPE OF NERD")}
	return Object.assign({}, prototype, nerdTic);
}

Jim = Nerd("Jim", 30);
Jom = NewNerd("Jom", 40);

Jim.sayName()
Jom.sayName()
Jom.sayAge()
try {
	Jim.sayAge() // fails
} catch(err) {
	console.log("Jim does not have a sayAge method - it was not assigned during inheritance")
}

// Another example

const proto = {
  hello: function hello() {
    return `Hello, my name is ${ this.name }`;
  }
};

const george = Object.assign({}, proto, {name: 'George'});
const msg = george.hello();
console.log(msg); // Hello, my name is George














