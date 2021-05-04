abstract class People {
    displayData() {
        console.log("some data");   // COULDN'T do this in an interface as can't implement in interfaces
    }

    abstract methodDefn();
}

class Kids extends People {
    methodDefn() {
        console.log("implementation of abstract parent method")
    }
    
}

// cannot instantiate an abstract class - used to model what you want other classes to have
// NOTES:
// An abstract class permits you to make functionality that subclasses can implement 
// or override whereas an interface only permits you to state functionality but 
// not to implement it.
// A class can extend only one abstract class while a class can implement multiple interfaces

// let peopleClass = new People;
// peopleClass.displayData();

let kidsClass = new Kids;
kidsClass.displayData();
kidsClass.methodDefn();