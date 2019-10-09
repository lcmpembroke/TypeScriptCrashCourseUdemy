
interface AutomobileInterface {
	brand?: string;
	speed?: number;
	speedMethod?(velocity: number): void			// return value is void
}

interface AutomobileInterface2 extends AutomobileInterface {

}

const automobile: AutomobileInterface = {
	brand: "BMW",
	speed: 200,
	speedMethod() {
		console.log(`this ${this.brand} is going at ${this.speed } mph`);
	}
}

const automobile2: AutomobileInterface2 = {
	brand: "BMW",
	speed: 200,
	speedMethod() {
		console.log(`this ${this.brand} is going at ${this.speed } mph`);
	}
}


function car1(automobile: AutomobileInterface) {
	console.log(`this ${automobile.brand} is going at ${automobile.speed } mph`)
	
}

car1(automobile);


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