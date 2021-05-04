// in this interface, all properties/funcs are defined as optional
interface AutomobileInterface {
	brand?: string;
	speed?: number;
	speedMethod?(velocity: number): void			// return value is void
};

// although inherited, in AutomobileInterface2 brand is now REQUIRED, as it
// overwrites the parent definition
interface AutomobileInterface2 extends AutomobileInterface {
	brand: string;
};

// everything property optional  as defined in interface
const automobile1: AutomobileInterface = {
};

const automobile2: AutomobileInterface2 = {
	brand: "BMW",
	speed: 200,
	speedMethod() {
		console.log(`this ${this.brand} is going at ${this.speed} mph`);
	}
};

console.log(`automobile1.speedMethod(): ${automobile1.speedMethod(300)}`)
console.log(`automobile2.speedMethod(): ${automobile2.speedMethod()}`)