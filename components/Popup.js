export default class Popup {
  constructor(popupSelector) {
    this._modal = document.querySelector(popupSelector);
    this._handleEscapeCloseBound = (evt) => this._handleEscapeClose(evt);
    this._popupCloseBtn = this._modal.querySelector(".popup__close");
    this._isOpen = false;
  }

  // It has public methods called open() and close() to open and close the popup.
  // The open() method should be called in the preexisting event handlers in index.js.
  open() {
    this._isOpen = true;

    this._modal.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeCloseBound);
  }

  close() {
    this._isOpen = false;
    this._modal.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeCloseBound);
  }

  // It stores the logic for closing the popup by pressing the Escape key.
  _handleEscapeClose(evt) {
    // console.log(evt);
    // debugger;
    // console.log("at Esc");
    if (evt.key === "Escape" || evt.key === "Esc") {
      // Your code to execute when the Escape key is pressed
      // for each form element check for the opened form and close it

      if (this._modal.classList.contains("popup_visible")) {
        this.close();
      }
    }
  }

  // Adds a click event listener to the close icon of the popup.
  // The modal window should also close when users click on the shaded area around the form.
  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });

    // console.log("at mousedown");
    this._modal.addEventListener("mousedown", (evt) => {
      // console.log("1", evt, "2", evt.target, "3", evt.currentTarget);
      if (
        this._modal.classList.contains("popup_visible") &&
        //So that the Esc event listener is not removed when image is clicked
        evt.target === evt.currentTarget
      ) {
        this.close();
      }
    });
  }
}
