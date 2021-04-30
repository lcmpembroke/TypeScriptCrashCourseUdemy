abstract class People {
    displayData() {
        console.log("some data");
    }
}

class Kids extends People {
    
}
// let peopleClass = new People;
// peopleClass.displayData();

let kidsClass = new Kids;
kidsClass.displayData();