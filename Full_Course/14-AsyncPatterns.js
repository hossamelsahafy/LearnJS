const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile)
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => { 
            if (err) {
                reject(err);
                return;
            } else {
                resolve(data);
            }
        })
    })
}
// getText('./Dir/Sub/Test')
//     .then(result => console.log(result))
//     .catch((err) => console.loog(err))

const start = async () => {
    try {
        const first = await readFile('./Dir/Sub/Test', 'utf8');
        const second = await readFile('./Dir/First.txt', 'utf8');
        await writeFile('./Dir/result.txt', `This Is Awesomeo: ${first}, ${second}`);
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}
start();
