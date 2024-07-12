const mypromise = new Promise((resolve, reject) => {
    let employees = []
    if (employees.length === 4) {
        resolve(employees);
    } else {
        reject(Error("Number Of Employees Is Not 4"))
    }
});
mypromise
    .then((resolveValue) => {
        resolveValue.length = 2;
        return resolveValue;
    })
    .then((resolveValue) => {
        resolveValue.length = 1;
        return resolveValue;
    })
    .then((resolveValue) => {
    console.log(`The Choosen Empolyee Is ${resolveValue}`);
    })
    .catch((rejectedReason) => console.log(rejectedReason))
    .finally(console.log("The Operation Is Done"));

