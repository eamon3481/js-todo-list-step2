import { Subject } from '../observer/Subject';
import { UserTitle } from "./UserTitle";
import { UserList } from "./UserList";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoFooter } from "./TodoFooter";
import { TodoCounter } from "./TodoCounter";
import { TodoFilter } from "./TodoFilter";
import { TodoRemover } from "./TodoRemover";

export const TodoApp = class extends Subject {

  constructor({
                userTitleTarget,
                userListTarget,
                todoInputTarget,
                todoListTarget,
                todoCounterTarget,
                todoFilterTarget,
                todoRemoverTarget,
              }) {
    super();
    this.addObservers(
        new UserTitle(userTitleTarget),
        new UserList(userListTarget),
        new TodoInput(todoInputTarget),
        new TodoList(todoListTarget),
        new TodoCounter(todoCounterTarget),
        new TodoFilter(todoFilterTarget),
        new TodoRemover(todoRemoverTarget),
    );
  }


};
