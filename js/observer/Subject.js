export const Subject = class {
  #observers;
  constructor(observers = []) {
    this.#observers = observers;
  }

  addObservers(...observer) {
    observer.forEach(this.addObserver);
  }

  addObserver(observer) {
    this.#observers.push(observer);
  };

  deleteObserver(observer) {
    let findIndex = this.#observers.findIndex(o => o === observer);
    if(findIndex < 0)return ;
    observer.splice(findIndex, 1);
  }


  notify() {
    this._observers.forEach((o) => {
      o.render();
    });
  }
};
