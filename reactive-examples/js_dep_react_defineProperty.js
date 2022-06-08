let data = {
  saucijsPrice: 10,
  quantity: 2
};
let target = null;

class Dep { // = Dependency
  constructor() {
    this.subscribers = [];  // "Subscribers" contain all dependent targets
  }

  depend() {
    if(target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  notify() {
    this.subscribers.forEach(sub => sub()); // Run all targets, or "observers"
  }
}

Object.keys(data).forEach(key => {
  let internalValue = data[key];
  // Each key get's its own Dep class 
  // (which tracks the dependencies of the key in the subscribers[] array)
  const dep = new Dep();  
  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      return internalValue;
    },
    set(newVal) {
      internalValue = newVal;
      dep.notify();
    }
  })
});

function watcher(fn) {
  target = fn;
  target();
  target = null;
}

watcher(() => {
  data.total = data.saucijsPrice * data.quantity
});