class Building {
    windows: string;
    escalators() {
        console.log("the escalators are moving");
    }
}

class Building2 extends Building {

    escalators() {
        console.log("the escalators are moving from building2");
    }
}

const myBuilding = new Building;
myBuilding.escalators();