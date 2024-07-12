const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(Error("I Am The Bad Doc"))
    }, 3000); 
});
async function readData() {
    console.log("Before Promise");
    // myPromise.then((resolvedValue) => console.log(resolvedValue))
    console.log(await myPromise.catch((err) => err));
    console.log("After Promise");
}

readData();
