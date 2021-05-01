// Union types - can SPECIFY different types in one variable

let unionTypeAny: any;

// problem you can assign any type you want to it
unionTypeAny = "string";
unionTypeAny = 34;
unionTypeAny = true;

// say you only want a number or string:
let unionType: number | string;
unionType = "string";
unionType = 34;
//unionType = true; NOT ALLOWED