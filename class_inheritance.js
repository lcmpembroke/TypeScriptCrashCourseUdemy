var Building = /** @class */ (function () {
    function Building() {
    }
    Building.prototype.escalators = function () {
        console.log("the escalators are moving");
    };
    return Building;
}());
var myBuilding = new Building;
myBuilding.escalators();
