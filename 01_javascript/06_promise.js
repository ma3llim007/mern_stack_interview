const fetchData = new Promise((resolve, reject) => {
    const isSuccessful = true;
    setInterval(() => {
        if (isSuccessful) {
            resolve("Data Fetched Successfully!");
        } else {
            reject("Failed To Fetch Data");
        }
    }, 1000);
});

// Consuming the Promise
fetchData
    .then((resp) => {
        console.log(resp);
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.log("🔁 Operation completed (success or fail).");
    });
