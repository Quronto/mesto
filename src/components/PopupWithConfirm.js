import Popup from "./Popup";

class PopupWithConfirm extends Popup {
  constructor(popupSelector, { callbackConfirmation }) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector('.popup__form');
    this._callbackConfirmation = callbackConfirmation;
  };

  open(cardElement, cardId) {
    this._cardElement = cardElement;
    this._cardId = cardId;
    super.open();
  };

  setEventListeners() {
    this._submitButton.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbackConfirmation(this._cardElement, this._cardId)
    })
    super.setEventListeners()
  };

}

export default PopupWithConfirm;