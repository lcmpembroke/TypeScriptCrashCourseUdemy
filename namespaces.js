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
// namespace myNameSpace {
// 	export function displayData() {
//         return "returned string";
//         //console.log("Hello from Durham");
//     }
// }
///<reference path="module1.ts"   />
console.log(myNameSpace.displayData());
