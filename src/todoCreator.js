import displayTasks from './displayTasks';
import { getFromLocalStorage } from './handleSaveLogic';
import { addToLocalStorage } from './handleSaveLogic';
import { handleEffects } from './handleEffects';
import { getData, addData } from './handleSaveLogic';

import { deleteItem } from './handleSaveLogic';

const deleteTask = async (index) => {
  //   let todos = getFromLocalStorage('todos');
  //   todos.splice(index, 1);
  //   todos.forEach((todo) => (todo.order = todos.indexOf(todo)));
  console.log(index);
  deleteItem('todos', index);
  const todos = await getData('todos');

  //   addToLocalStorage(todos, 'todos');
  displayTasks(todos);
  handleEffects();
};
// const deleteTask = (index) => {
//   let todos = getFromLocalStorage('todos');
//   todos.splice(index, 1);
//   todos.forEach((todo) => (todo.order = todos.indexOf(todo)));
//   addToLocalStorage(todos, 'todos');
//   displayTasks(todos);
//   handleEffects();
// };

function defineTaskId(todos) {
  todos.forEach((todo) => {
    todo.order = todos.indexOf(todo);
  });
}

function modifyTask(index, taskValue) {
  let todos = getFromLocalStorage('todos');
  const correctIndex = todos.findIndex((item) => item.order == index);
  todos[correctIndex].task = `${taskValue}`;
  addToLocalStorage(todos, 'todos');
  displayTasks(todos);
}

function modifyStatus(index, statusValue) {
  let todos = getFromLocalStorage('todos');
  const correctIndex = todos.findIndex((item) => item.order == index);
  todos[correctIndex].status = `${statusValue}`;
  addToLocalStorage(todos, 'todos');
  displayTasks(todos);
}

function modifyPriority(index, priorityValue) {
  let todos = getFromLocalStorage('todos');
  const correctIndex = todos.findIndex((item) => item.order == index);
  todos[correctIndex].priority = `${priorityValue}`;
  addToLocalStorage(todos, 'todos');
  displayTasks(todos);
}

function modifyList(index, listValue) {
  let todos = getFromLocalStorage('todos');
  const correctIndex = todos.findIndex((item) => item.order == index);
  todos[correctIndex].list = `${listValue}`;
  addToLocalStorage(todos, 'todos');
  displayTasks(todos);
}

function modifyDueDate(index, dueDateValue) {
  let todos = getFromLocalStorage('todos');
  const correctIndex = todos.findIndex((item) => item.order == index);
  todos[correctIndex].dueDate = `${dueDateValue}`;
  addToLocalStorage(todos, 'todos');
  displayTasks(todos);
}

function todoCreator(task, status, list, priority, dueDate) {
  let todo = {
    task,
    status,
    list,
    priority,
    dueDate,
    order: null,
  };

  return Object.assign(todo);
}

const createNewTask = async (task, status, list, priority, dueDate) => {
  const todos = (await getData('todos')) || [];
  console.log(todos);
  const todo = todoCreator(task, status, list, priority, dueDate);
  todos.push(todo);
  todo.order = todos.length - 1;
  console.log(todos);
  addData(todo, 'todos');
  //   addToLocalStorage(todos, 'todos');
  return todo;
};
// const createNewTask = (task, status, list, priority, dueDate) => {
//   const todos = getFromLocalStorage('todos');
//   console.log(todos);
//   const todo = todoCreator(task, status, list, priority, dueDate);
//   todos.push(todo);
//   todo.order = todos.length - 1;
//   console.log(todos);
//   addToLocalStorage(todos, 'todos');
//   return todo;
// };

export {
  defineTaskId,
  deleteTask,
  modifyTask,
  modifyStatus,
  modifyPriority,
  modifyList,
  modifyDueDate,
  todoCreator,
  createNewTask,
};
