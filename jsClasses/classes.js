class Animal {
	constructor (name) {
		this.name = name
	}

	sayHi() {
		console.log(`${this.name} says hi!`)
	}
}


class Dog extends Animal {
	constructor (name) {
		super(name)
	}
}

/* Dog inherits Animal
 * Call Super in Dog to set Animal attributes
 */

pet = new Dog("Marley")
pet.name     // "Marley"
pet.sayHi()  // "Marley says hi!"

/* Multiple inheritance requires a difference approach
 * because in JS a class may only have one superclass
 * Use mix-ins - templates for classes 
 *
 * Create a function with a superclass as input
 * and a subclass extending that superclass as output
 */

let animalMixin = Base => class extends Base {
	eat() { console.log (`${this.name} eats!`) }
}

let humanMixin = Base => class extends Base {
	speak() { console.log(`I am ${this.name} and I exist!`) }
}

class New {
	constructor (name) {
		this.name = name
	}

	sayHi() {
		console.log(`${this.name} says hi!`)
	}

}

class Pet extends animalMixin(humanMixin(New)) {}

newPet = new Pet("Marley with multiple inheritance")
newPet.sayHi()
newPet.eat()
newPet.speak()

