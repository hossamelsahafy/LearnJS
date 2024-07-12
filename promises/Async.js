// function getData() {
//     return new Promise((resolve, reject) => {
//         let users = [];
//         if (users.length > 0) {
//             resolve("Users Found");
//         } else {
//             reject("No Users Found")
//         }
//     });
// }
// getData().then (
//     (resolvedValue) => console.log(resolvedValue),
//     (rejectedValue) => console.log("Rejected " + rejectedValue)
// );
// function getData() {
//         let users = ["HOS"];
//         if (users.length > 0) {
//             return Promise.resolve("Users Found");
//         } else {
//             return Promise.reject("users not found");
//         }
// };

// getData().then (
//     (resolvedValue) => console.log(resolvedValue),
//     (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

async function getData() {
    let users = ["HOS"];
    if (users.length > 0) {
        return "Users Found";
    } else {
        throw new Error("No Users Found");
    }
};

console.log(getData());

getData().then (
(resolvedValue) => console.log(resolvedValue),
(rejectedValue) => console.log("Rejected " + rejectedValue)
);
