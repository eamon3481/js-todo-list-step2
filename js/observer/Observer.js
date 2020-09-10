export const Observer = class {

    #target;
    #state;

    constructor(target, state) {
        this.#target = target;
        this.#state = state;
        this.render();
    }

    setState(state) {
        this.#state = { ...this.#state, ...state };
        this.render();
    }


    render() {
        throw new Error("Not Exists Render() logic");
    }

};
