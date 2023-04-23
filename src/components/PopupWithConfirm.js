// import Popup from "./Popup.js";

// export default class PopupWithConfirm extends Popup {
//   constructor(popupSelector) {
//     super(popupSelector);
//     this._form = document.querySelector('.popup__form');
//     this._submitButton = this._form.querySelector('.popup__submit');
//   }

//   setCallbackConfirm(callbackConfirm) {
//     this._callbackConfirm = callbackConfirm;
//   }

//   setEventListeners() {
//     super.setEventListeners();
//     this._submitButton.addEventListener('click', (evt) => {
//       evt.preventDefault();
//       this._callbackConfirm();
//     });
//   }
// }