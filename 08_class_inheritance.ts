class Building {
    windows: string = "window 1";
    escalators() {
        console.log("the escalators are moving");
    }
    windowCheck() {
        console.log("the windows are clean");
    }

}

class Building2 extends Building {
    escalators() {
        console.log("the escalators are moving from building2");
    }
}

const myBuilding = new Building;
myBuilding.escalators();

const myBuilding2 = new Building2;
myBuilding2.escalators();
myBuilding2.windowCheck();  // this is defined in parent class
console.log(`windows in building 2: ${myBuilding2.windows}`);   // states window 1 as not overriden in child
