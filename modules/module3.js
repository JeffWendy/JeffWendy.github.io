let a = 111;

function printA(){
    console.log("module1: " + String(a));
}

function modifyA(){
    ++a;
}

export {a, printA, modifyA};