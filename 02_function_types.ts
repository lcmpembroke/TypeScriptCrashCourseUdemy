function voidFunction(): void {
    console.log("HELLO I'm a console log");
}

function stringFunction(): string {
    return "HELLO I'm a string";
}

function numberFunction(val1: number, val2: number): number {
	let total: number = val1 + val2;
	return total;
}

// functionType1 has to be a function that returns a void
let functionType1: () => void;
functionType1 = voidFunction;
functionType1();

// functionType1 has to be a function that returns a string
let functionType2: () => string;
functionType2 = stringFunction;
console.log(functionType2());

// functionType3 has to be a function that takes two numbers, and returns a number
let functionType3: (param1: number, param2: number) => number;
functionType3 = numberFunction;
console.log(functionType3(2, 5));

