var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Jane";
    function displayData() {
        return myNameSpace.name;
        //console.log("Hello from Durham");
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
console.log(myNameSpace.displayData());
