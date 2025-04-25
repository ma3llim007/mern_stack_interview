function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetch");
        }, 1000);
    });
}

async function getData(params) {
    console.log("Fetching....");
    const result = await fetchData();
    console.log(result);
}

getData();
