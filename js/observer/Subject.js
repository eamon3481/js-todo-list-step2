
export const Subject = class{
    _observers;
    constructor(observers) {
        this._observers = observers;
    }


    addObserver(observer){
        this._observers.push(observer);
    }
    deleteObserver(observer){
        //삭제
    }

    notify(){
        this._observers.forEach(o=>{
            o.render();
        })
    }
}
