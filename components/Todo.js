export class ToDo {
  constructor(data, selector, updateTodoCompleted, updateTodoTotal) {
    this._selector = selector;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
    this._completed = data.completed;
    this._updateTodoCompleted = updateTodoCompleted;
    this._updateTodoTotal = updateTodoTotal;
  }

  _getTemplate() {
    const todoElement = document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
    return todoElement;
  }
  getView() {
    this._todoElement = this._getTemplate();
    const todoNameEl = this._todoElement.querySelector(".todo__name");
    this.todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    const todoDate = this._todoElement.querySelector(".todo__date");
    this._setEventListeners();
    todoNameEl.textContent = this._name;
    this.todoCheckboxEl.checked = this._completed;
    // Apply id and for attributes.
    // The id will initially be undefined for new todos.
    this.todoCheckboxEl.id = `todo-${this._id}`;
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
    this._updateTodoTotal(true);
    return this._todoElement;
  }
  _setEventListeners() {
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
      if (this.todoCheckboxEl.checked) {
        this._updateTodoCompleted(false);
      }
      this._updateTodoTotal(false);
    });
    this.todoCheckboxEl.addEventListener("change", () => {
      this._completed = this.todoCheckboxEl.checked;
      // console.log(this.todoCheckboxEl.checked);
      this._updateTodoCompleted(this._completed);
    });
  }
}
