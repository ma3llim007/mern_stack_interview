function multipleBy5(num) {
    return num * 5;
}
multipleBy5.power = 5;
// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
};

createUser.prototype.printScore = function () {
    console.log(`Score Is ${this.score}`);
};

const userOne = new createUser("userOne", 25);
const userTwo = createUser("userTwo", 250);

userOne.printScore();
