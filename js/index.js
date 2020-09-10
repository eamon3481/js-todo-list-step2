import { TodoApp } from './components/TodoApp.js';

const $todo = document.querySelector('#app');
const querySelector = document.querySelector;
const getEelemtnId = document.getElementById;

new TodoApp({
  userTitleTarget:getEelemtnId("user-title"),
  userListTarget:getEelemtnId("user-list"),
  todoInputTarget:querySelector(".input-container>input"),
  todoListTarget:querySelector(".main>.todo-list"),
  todoFooterTarget:querySelector(".count-container"),
  todoCounterTarget:querySelector(".count-container>.todo-count"),
  todoFilterTarget:querySelector(".count-container>.filters"),
  todoRemoverTarget:querySelector(".count-container>.clear-completed")
});

const onUserCreateHandler = () => {
  const userName = prompt('추가하고 싶은 이름을 입력해주세요.');
};

const userCreateButton = document.querySelector('.user-create-button');
userCreateButton.addEventListener('click', onUserCreateHandler);
