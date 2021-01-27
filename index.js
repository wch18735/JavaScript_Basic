import { capitalizeString } from "./string_function.js";
const cap = capitalizeString("hello!");
console.log(cap);

// * to import everything in file
import * as capitalizeStrings  from "capitalize_string.js";

// export default (fallback export)
// when a file just export one thing
export default function subtract(x,y) {return x - y;}

// import a default export: not use {}
import subtract from "math_functions"