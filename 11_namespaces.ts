// To Compile:
//  >tsc 11_namespaces --outFile 11_namespaces.js

// To Run:
//  >node .\11_namespaces.js


///<reference path="11_module1.ts" />

console.log(myNameSpace.name);

// this is a typescript import
import thisSpace = myNameSpace.displayData;

console.log(thisSpace("and I'm ten years older than my sister"));



