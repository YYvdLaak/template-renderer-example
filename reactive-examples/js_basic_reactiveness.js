let saucijsPrice = 10;
let quantity = 20;
let total = 0;
let target = () => { total = saucijsPrice * quantity };

let storage = [];
let record = () => { storage.push(target) };
let replay = () => { storage.forEach(fn => fn()) };

record();
target();



// Test the reactiveness
/*
console.log(total);
price = 50;
replay();
console.log(total);
*/