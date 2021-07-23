let a = {
    a: 1,
    b: "abssdf"
}

function printA(){
    console.log("module1: " + String(a.a));
}

function modifyA(){
    ++a.a;
}

export {a, printA, modifyA};