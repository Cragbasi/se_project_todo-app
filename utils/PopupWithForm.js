import Popup from "../components/Popup.js";

// It accepts two arguments: the popup selector
// and a callback function, which PopupWithForm calls when the form’s submit event fires.
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitEventFunction, genID, adjustDate) {
    super(popupSelector);
    this._submitEventFunction = submitEventFunction;
    this._id = genID;
    this._date = adjustDate;
  }

  // Collects data from all the input fields and returns it as an object.
  // This data should then be passed to the submission handler as an argument.
  _getInputValues() {
    const inputList = document.querySelectorAll(".popup__input");
    const formValues = {};

    inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    formValues["id"] = this._id;

    if (formValues.date) {
      formValues.date = this._date(formValues.date);
    }

    // Create a date object and adjust for timezone
    // const date = new Date(dateInput);
    // date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    return formValues;
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
