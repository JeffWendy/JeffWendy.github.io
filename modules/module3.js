let a = 11;

function printA(){
    console.log("module1: " + String(a));
}

function modifyA(){
    ++a;
}

export {a, printA, modifyA};