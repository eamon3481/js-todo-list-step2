import { Observer } from "../observer/Observer.js";

export const TodoInput = class extends Observer {

    setEvent(){
        this.#target.addEventListener('keyup', ({ target, key }) => {
            if (key === "Enter") {

            }
        });
    }
};
