import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
    this._popupSubmit = this._popup.querySelector('.popup__submit');
    this._initialButtonText = this._popupSubmit.textContent;
  };

  setEventListeners() {
    super.setEventListeners()
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  };

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
    return this._formValues;
  };

  renderLoading(isLoading) {
    if (isLoading) {
      this._popupSubmit.textContent = 'Сохранение...';
    } else {
      this._popupSubmit.textContent = this._initialButtonText;
    }
  }

  // доработать
  //  setInputValues(data) {
  //    this._inputList.forEach((input) => {
  //     input.value = data[input.userName];
  //     input.value = data[input.userJob];
  //     });
  //   }

  close() {
    super.close();
    this._popupForm.reset();
  };
};

export default PopupWithForm;