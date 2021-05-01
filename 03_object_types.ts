

// declare vaiable that only holds ans object nothing else
let car: {} = {
    colour: "red",
    doors: 5
};


// or as below with more strict types defined for properties:
let vehicle: { brand: string, engineType: number } = {
    brand: "Mercedes",
    engineType: 4.6

};

vehicle.brand = "Toyota";