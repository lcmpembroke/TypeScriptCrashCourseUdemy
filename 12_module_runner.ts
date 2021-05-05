// create an external module - the file itself will hold the code
// diff ways:

// syntax "require" is the older syntax
import ModuleObject = require("./12_module_external");

// ES6 - new syntax...import
import * as ModuleObject2 from "./12_module_external";

import { name as MyName, displayData } from "./12_module_external";

console.log(ModuleObject.displayData("hey cool!"));
console.log(ModuleObject2.displayData("hey cool2!"));
//console.log(name);
console.log(MyName);
console.log(displayData("some string"));