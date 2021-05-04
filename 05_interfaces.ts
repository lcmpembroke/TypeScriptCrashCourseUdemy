
// INTERFACES DEFINED ---------------------------------------------
interface AutomobileInterface {
	brand: string;
	speed: number;
	speedMethod(velocity: number): void			// return value is void
}


// DATA: IMPLEMENTING INTERFACES  ---------------------------------------------
// IMPLEMENTS THE AutomobileInterface
const automobile: AutomobileInterface = {
	brand: "BMW",
	speed: 200,
	speedMethod() {
		console.log(`this ${this.brand} is going at ${this.speed } mph`);
	}
}

//  Implement Interfaces to functions
function car1(automobile: AutomobileInterface) {
	console.log(`this ${automobile.brand} is going at ${automobile.speed} mph`)

}

// note this function doesn't enfore the AutomobileInterface for the param
// so can be error as can change the speed to a string!
function car2(automobile) {
	automobile.speed = "a string";
	console.log(`this ${automobile.brand} is going at ${automobile.speed} mph`)

}

// CALL FUNCTION
car1(automobile);

// CALL FUNCTION - notice the bug as the Autombile inferface not enforced
car2(automobile);



// INTERFACES TO CLASSES
class AutomobileClass implements AutomobileInterface {
    brand: string;
	speed: number;
	speedMethod(x) {
        this.speed = x;
        console.log(`hi from speedmethod in automobile class, speed is ${this.speed}`);
    }
}

let carA = new AutomobileClass;
carA.speedMethod(200);

