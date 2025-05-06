// Subject (Observable)
class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((obj) => obj !== observer);
    }

    notify(data) {
        this.observers.forEach((observer) => observer(data));
    }
}

// Observers (Listeners)
function observerOne(data) {
    console.log("Observer One Received: ", data);
}

function observerTwo(data) {
    console.log("Observer Two received: ", data);
}

// Using the Observer Pattern
const subject = new Subject();

// subscribe Observers
subject.subscribe(observerOne);
subject.subscribe(observerTwo);

// notify Observable
subject.notify("Hello Observers!");
