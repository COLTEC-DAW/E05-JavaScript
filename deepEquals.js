// TODO: Consertar

function intAleatorio() {
    return Math.floor(Math.random() * 10);
}

const listaObjs = [
    {name: 'John', age: 23}, 
    {name: '3', age: 3}, 
    {name: 'Peter', age: 8}, 
    {name: 'Hanna', age: 14}, 
    {name: 'Adam', age: 37}
];

// Iteração :(

function printObjetos() {
    

    for (let obj in listaObjs) {
        console.log(`\t aaaa ${obj.val1}`);
    }

    console.log("a");
}
    
function deepEquals(obj1, obj2) {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            console.log("\t" + prop);
        }
    }
}

printObjetos();