const original = { name: "Mohd Sameer", address: { city: "Hyderabad" } };
// Shallow Copy:
const shallowCopy = { ...original };
shallowCopy.name = "Bob"; // Ok Independent
shallowCopy.address.city = "London"; // Also Changes original address of city because it the nested object
// console.log("Shallow Copy: ", shallowCopy);

// Deep Copy
const deepCopy = JSON.parse(JSON.stringify(original));
// Another Way to create deep Copy with new features method structuredClone
const deepCopyTwo = structuredClone(original);
deepCopy.address.city = "Hyderabad";
console.log("original: ", original);
console.log("Deep Copy ", deepCopy);
console.log("Deep Copy Two ", deepCopyTwo);
