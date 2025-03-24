import Popup from "./Popup.js";

import { v4 as uuidv4 } from "https://jspm.dev/uuid";

// It accepts two arguments: the popup selector
// and a callback function, which PopupWithForm calls when the form’s submit event fires.
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitEventFunction) {
    super(popupSelector);
    this._submitEventFunction = submitEventFunction;
  }

  // Collects data from all the input fields and returns it as an object.
  // This data should then be passed to the submission handler as an argument.
  _getInputValues(evt) {
    const name = evt.target.name.value;
    const dateInput = evt.target.date.value;
    const id = uuidv4();

    // Create a date object and adjust for timezone
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    this._formInputs = { name, date, id };

    return this._formInputs;
  }

  // It overrides the setEventListeners() parent method.
  // Adds a submit event listener to the form
  // and call the setEventListeners() method of the parent class.
  setEventListeners() {
    super.setEventListeners();
    this._form = this._modal.querySelector(".popup__form");
    this._form.addEventListener("submit", (evt) => {
      //  evt.preventDefault();
      this._submitEventFunction(this._getInputValues(evt));

      this.close();
      //  reset the form’s inputs.
      this._form.reset();
    });
  }
}
