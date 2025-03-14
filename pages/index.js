import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import { ToDo } from "../components/Todo.js";
export { openModal, closeModal };
import {
  addTodoButton,
  addTodoCloseBtn,
  addTodoPopup,
  addTodoForm,
  todosList,
} from "../utils/constants.js";

import { FormValidator } from "../components/FormValidator.js";

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

const formElement = document.querySelector(validationConfig.formSelector);
const todoFormValidator = new FormValidator(validationConfig, formElement);
todoFormValidator.enableValidation();

function generateTodo(data) {
  const todo = new ToDo(data, "#todo-template");
  const todoElement = todo.getView();
  // Add to the DOM
  return todoElement;
}

function renderTodos(data) {
  data.forEach((initialTodo) => {
    renderTodo(initialTodo);
  });
}
renderTodos(initialTodos);

function renderTodo(data) {
  const todoElement = generateTodo(data);

  todosList.append(todoElement);
}

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;
  const id = uuidv4();

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const values = { name, date, id };
  renderTodo(values);
  closeModal(addTodoPopup);
  //  reset the form’s inputs.
  todoFormValidator.resetValidation();
});

// function generateTodo(data) {
//   if (Array.isArray(data)) {
//     data.forEach((initialTodo) => {
//       const todo = new ToDo(initialTodo, ".todo");

//       const todoElement = todo.getView();

//       // Add to the DOM
//       todosList.append(todoElement);
//     });
//   } else {
//     const todo = new ToDo(data, ".todo");
//     const todoElement = todo.getView();
//     // Add to the DOM
//     todosList.append(todoElement);
//     //  reset the form’s inputs.
//     const resetFormElement = new FormValidator(validationConfig, formElement);
//     resetFormElement.resetValidation();
//   }
// }

// The logic in this function should all be handled in the Todo class.
// const generateTodo = (data) => {
//   const this._todoElement = todoTemplate.content
//     .querySelector(".todo")
//     .cloneNode(true);
//   const todoNameEl = this._todoElement.querySelector(".todo__name");
//   const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
//   const todoLabel = this._todoElement.querySelector(".todo__label");
//   const todoDate = this._todoElement.querySelector(".todo__date");
//   const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

//   todoNameEl.textContent = data.name;
//   todoCheckboxEl.checked = data.completed;

//   // Apply id and for attributes.
//   // The id will initially be undefined for new todos.
//   todoCheckboxEl.id = `todo-${data.id}`;
//   todoLabel.setAttribute("for", `todo-${data.id}`);

//   // If a due date has been set, parsing this it with `new Date` will return a
//   // number. If so, we display a string version of the due date in the todo.
//   const dueDate = new Date(data.date);
//   if (!isNaN(dueDate)) {
//     todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     })}`;
//   }

//   todoDeleteBtn.addEventListener("click", () => {
//     this._todoElement.remove();
//   });

//   return this._todoElement;
// };

// class ToDo {
//   constructor(data, selector) {
//     this._selector = selector;
//     this._name = data.name;
//     this._date = data.date;
//     this._id = data.id;
//     this._completed = data.completed;
//   }

//   _getTemplate() {
//     const todoElement = todoTemplate.content
//       .querySelector(this._selector)
//       .cloneNode(true);
//     return todoElement;
//   }
//   getView() {
//     this._todoElement = this._getTemplate();
//     const todoNameEl = this._todoElement.querySelector(".todo__name");
//     const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
//     const todoLabel = this._todoElement.querySelector(".todo__label");
//     const todoDate = this._todoElement.querySelector(".todo__date");
//     // const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
//     this._setEventListeners();
//     todoNameEl.textContent = this._name;
//     todoCheckboxEl.checked = this._completed;
//     // Apply id and for attributes.
//     // The id will initially be undefined for new todos.
//     todoCheckboxEl.id = `todo-${this._id}`;
//     todoLabel.setAttribute("for", `todo-${this._id}`);

//     // If a due date has been set, parsing this it with `new Date` will return a
//     // number. If so, we display a string version of the due date in the todo.
//     const dueDate = new Date(this._date);
//     if (!isNaN(dueDate)) {
//       todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//       })}`;
//     } else {
//     }
//     return this._todoElement;
//   }
//   _setEventListeners() {
//     const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
//     todoDeleteBtn.addEventListener("click", () => {
//       this._todoElement.remove();
//     });

//     addTodoButton.addEventListener("click", () => {
//       openModal(addTodoPopup);
//     });

//     addTodoCloseBtn.addEventListener("click", () => {
//       closeModal(addTodoPopup);
//     });
//   }
// }

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

//   // Create a date object and adjust for timezone
//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const values = { name, date };
//   const todo = generateTodo(values);
//   todosList.append(todo);
//   closeModal(addTodoPopup);
// });

// initialTodos.forEach((item) => {
//   const todo = generateTodo(item);
//   todosList.append(todo);
// });
