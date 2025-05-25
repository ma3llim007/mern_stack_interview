const id = Symbol("id");

const user = {
    name: "Alice",
    [id]: 123,
};

console.log(user[id]);
