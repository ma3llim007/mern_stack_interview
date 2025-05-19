function fetchUserId() {
    return Promise.resolve(1);
}

function getUserName(userId) {
    return Promise.resolve({ userId: userId, name: "Alice" });
}

function displayName(name) {
    console.log(name);
}

fetchUserId(1)
    .then((userId) => getUserName(userId).then((response) => displayName(response.name)))
    .catch((err) => console.log(err));
