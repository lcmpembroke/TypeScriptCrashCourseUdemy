let aName: any;		// type of any allows different types to be assigned later
aName = 12;
aName = "Tomato";

let aName2 = "Apple";
//aName2 = 12;		cannot do this as initial assignment was to a string so it has to remain as a string

let anArray: any[] = ["tea", "coffee", "milk"];
console.log(`anArray initially: ${anArray[0]}, ${anArray[1]}, ${anArray[2]}`);

anArray = [2, 3];									// can do this because array initially was created of any[]
console.log(`anArray second: ${anArray[0]}, ${anArray[1]}`);

anArray = ["tea", 55];

console.log(`anArray third: ${anArray[0]}, ${anArray[1]}`);

let numbersArray: number[] = [2, 3, 4, 5, 6];
numbersArray = [1, 2,99];

console.log(`NumberArray length: ${numbersArray.length}`);
for (var i in numbersArray) {
	console.log(`Number: ${numbersArray[i]}`);
}

// -------------------------------------------------------
// writing functions strictly - assigning types to all variables - could be writeen without ANY types defined but then errors only detected in runtime rather than compile time
function testFunction(val1: number, val2: number): number {
	let total: number = val1 + val2;
	return total;
}

console.log(`testFunction(2,4): ${testFunction(2, 4)}`);