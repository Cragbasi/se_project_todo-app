import {
  todoTemplate,
  addTodoButton,
  addTodoCloseBtn,
  addTodoPopup,
} from "../utils/constants.js";

import { openModal, closeModal } from "../pages/index.js";

export class ToDo {
  constructor(data, selector) {
    this._selector = selector;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
    this._completed = data.completed;
  }

  _getTemplate() {
    const todoElement = todoTemplate.content
      .querySelector(this._selector)
      .cloneNode(true);
    return todoElement;
  }
  getView() {
    this._todoElement = this._getTemplate();
    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    const todoDate = this._todoElement.querySelector(".todo__date");
    // const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    this._setEventListeners();
    todoNameEl.textContent = this._name;
    todoCheckboxEl.checked = this._completed;
    // Apply id and for attributes.
    // The id will initially be undefined for new todos.
    todoCheckboxEl.id = `todo-${this._id}`;
    todoLabel.setAttribute("for", `todo-${this._id}`);

    // If a due date has been set, parsing this it with `new Date` will return a
    // number. If so, we display a string version of the due date in the todo.
    const dueDate = new Date(this._date);
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    } else {
    }
    return this._todoElement;
  }
  _setEventListeners() {
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });

    addTodoButton.addEventListener("click", () => {
      openModal(addTodoPopup);
    });

    addTodoCloseBtn.addEventListener("click", () => {
      closeModal(addTodoPopup);
    });
  }
}
