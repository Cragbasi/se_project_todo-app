// const validationConfig = {
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   errorClass: "popup__error_visible",
//   inputErrorClass: "popup__input_type_error",
//   inactiveButtonClass: "button_disabled",
// };
import { validationConfig } from "../utils/constants.js";

export class FormValidator {
  constructor(settings, formElement) {
    // Initialize properties here
    this.settings = settings;
    this.formElement = formElement;
    this.inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    );
    this.buttonElement = formElement.querySelector(
      settings.submitButtonSelector
    );
  }

  // checking the field's validity, changing the state of the Submit button, and adding all the necessary handlers.
  _checkInputValidity(inputElement) {
    // const checkInputValidity = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
      this.showInputError(
        // formElement,
        inputElement,
        inputElement.validationMessage
        // settings
      );
    } else {
      this.hideInputError(
        // formElement,
        inputElement
        // settings
      );
    }
  }
  _toggleButtonState() {
    // const toggleButtonState = (inputList, buttonElement, settings) => {
    if (this.hasInvalidInput()) {
      this.buttonElement.classList.add(this.settings.inactiveButtonClass);
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove(this.settings.inactiveButtonClass);
      this.buttonElement.disabled = false;
    }
  }

  showInputError(
    // formElement,
    inputElement,
    errorMessage
    // settings
  ) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = this.formElement.querySelector(errorElementId);
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.settings.errorClass);
  }

  hideInputError(inputElement) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = this.formElement.querySelector(errorElementId);
    inputElement.classList.remove(this.settings.inputErrorClass);
    errorElement.classList.remove(this.settings.errorClass);
    errorElement.textContent = "";
  }

  hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // enables form validation.
  enableValidation() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this.setEventListeners();
  }

  setEventListeners() {
    // const inputList = Array.from(
    //   formElement.querySelectorAll(settings.inputSelector)
    // );
    // const buttonElement = formElement.querySelector(
    //   settings.submitButtonSelector
    // );

    this._toggleButtonState();

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // reset the form’s inputs.
  resetValidation() {
    this.formElement.reset();
    this._toggleButtonState();
  }
}
