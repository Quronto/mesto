class FormValidator {
  constructor(options, form) {
    this._options = options;
    this._form = form;
    this._submitButton = this._form.querySelector(this._options.submitSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._options.inputSelector));
  }

  _hiddenError = (errorElement) => {
    errorElement.innerText = '';
    errorElement.classList.remove(this._options.inputErrorClass);
  };
  
  _showError = (errorElement, message) => {
    errorElement.innerText = message;
    errorElement.classList.add(this._options.inputErrorClass);
  };
  
  _toggleInputState = (inputElement) => {
    const isValid = inputElement.validity.valid;
    const inputSectionElement = inputElement.closest(this._options.inputSectionSelector);
    const errorElement = inputSectionElement.querySelector(this._options.inputErrorSelector);
    if (isValid) {
      this._hiddenError(errorElement, this._options.inputErrorClass);
      inputElement.classList.remove(this._options.inputErrorLineClass);
    } else {
      this._showError(errorElement, inputElement.validationMessage, this._options.inputErrorClass);
      inputElement.classList.add(this._options.inputErrorLineClass);
    }
  };
  
  _enableButton = () => {
    this._submitButton.removeAttribute('disabled');
    this._submitButton.classList.remove(this._options.disabledButtonClass);
  };
  
  _disableButton = () => {
    this._submitButton.setAttribute('disabled', true);
    this._submitButton.classList.add(this._options.disabledButtonClass);
  };
  
  _toggleButtonState = () => {
    const formIsValid = this._inputs.every(inputElement => inputElement.validity.valid);
  
    if (formIsValid) {
      this._enableButton(this._submitButton);
    } else {
      this._disableButton(this._submitButton);
    }
  };
  
  _setEventListeners = () => {
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleInputState(inputElement);
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  
    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState();
      }, 0);
    });
  };
  
  enableValidation = () => {
   this._setEventListeners(this._form);
  };
};

export default FormValidator;