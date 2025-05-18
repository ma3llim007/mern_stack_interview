// ReferenceError
// console.log(x); // x is not defined

// TypeError
// null.f(); // Cannot read properties of null

// SyntaxError
// eval('foo bar'); // Invalid JavaScript syntax

try {
  let result = someUndefinedFunction();
} catch (error) {
  console.error("An error occurred:", error.message);
}
