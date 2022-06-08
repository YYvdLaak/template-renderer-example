class Dep { // = Dependency
  constructor() {
    // "Subscribers" contain all dependent targets
    this.subscribers = [];  
  }

  depend() {
    if(target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  // Run all targets, or "observers"
  notify() {
    this.subscribers.forEach(sub => sub()); 
  }
}

// Watch a function before executing, and reset it after
// "watching" here means saving it in the subscribers of the Dep class.
function watcher(fn) {
  target = fn;
  dep.depend();
  target();
  target = null;
}

const dep = new Dep();
let saucijsPrice = 5;
let quantity = 2;
let total = 0;
let target;

watcher(() => {
  total = saucijsPrice * quantity
});



/*
console.log(total);
price = 20;
console.log(total);
dep.notify();
console.log(total);
*/
