var automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " mph");
    }
};
function car1(automobile) {
    console.log("this " + automobile.brand + " is going at " + automobile.speed + " mph");
}
car1(automobile);
var AutomobileClass = /** @class */ (function () {
    function AutomobileClass() {
    }
    AutomobileClass.prototype.speedMethod = function (x) {
        this.speed = x;
        console.log("hi from speedmethod in automobile class, speed is " + this.speed);
    };
    return AutomobileClass;
}());
var carA = new AutomobileClass;
carA.speedMethod(200);
