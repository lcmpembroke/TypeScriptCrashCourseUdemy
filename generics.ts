function displayData<TYPE>(someData: TYPE){
    return someData;
}

console.log(displayData("this is the data i am using"));

// class generics
class objectGenericsClass<TYPE1, TYPE2>{
    constructor(public value1: TYPE1, public value2: TYPE2) {

    }
}

let object1 = new objectGenericsClass<string, number>("I'm a string", 2);
let object2 = new objectGenericsClass<number, boolean>(2, true);

// array generics
let array1: number[] = [1,3,5,7,9];
let array2: Array<number> = [1,3,5,7,9];


// class generics constraints
class objectGenericsClass2<TYPE1, TYPE2 extends string>{
    constructor(public value1: TYPE1, public value2: TYPE2) {

    }
}
let objectA = new objectGenericsClass2<boolean, string>(true,"I'm a string");