let a = {
    a: 1,
    b: {
        prop1: "b.prop1",
        prop2: "b.prop2",
    }
}

function printA(){
    console.log("module1: " + String(a.a));
}

function modifyA(){
    ++a.a;
}

export {a, printA, modifyA};