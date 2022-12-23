const developers = [
    {
        name: "John",
        favFruit: "Mango",
        company: "Google"
    },
    {
        name: "Jessica",
        favFruit: "Pineapple",
        company: "Microsoft"
    }
];
function getDevelopers() {
    setTimeout(() => {
        developers.forEach((dev) =>{
            console.log(dev.company);
        })
    }, 2000);
}
// function createDeveloper(dev) {
//     setTimeout(() => {
//         developers.push(dev);
//     }, 3000);
// }
// getDevelopers();
// createDeveloper({
//     name: "Ramesh",
//     favFruit: "Orange",
//     company: "Amazon"
// });
//Asynchronous using Callbacks
/* function createDeveloper(dev, cb) {
    setTimeout(() => {
        developers.push(dev);
        cb();
    }, 3000);
}
createDeveloper({
    name: "Ramesh",
    favFruit: "Orange",
    company: "Amazon"
}, getDevelopers); */
//Promises
function createDeveloper(dev) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(dev && Object.keys(dev).length === 0 && Object.getPrototypeOf(dev) === Object.prototype) {
                reject("Empty Dev Receieved. Please Fix");
            } else {
                resolve(developers.push(dev));
            }
        }, 3000);
    })
}
/*createDeveloper({
    name: "Ramesh",
    favFruit: "Orange",
    company: "Amazon"
}).then(getDevelopers)
.catch(err => console.error(err))
.finally("We're done"); */
//Async Await
async function initProgram() {
    await createDeveloper({
        name: "Ramesh",
        favFruit: "Orange",
        company: "Amazon"
    });
    getDevelopers();
}
initProgram();
new Promise( (resolve,reject) => {
    setTimeout(() => resolve(1),1000);
})
.then((result) => {
    alert(result);
    return result*2;
})
.then((result) => {
    alert(result);
    return result*2;
})
.then((result) => {
    alert(result);
    return result*2;
});