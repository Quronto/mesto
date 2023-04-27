import Popup from "./Popup.js";

class ImagePopup extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupParagraph = this._popup.querySelector('.popup__paragraph');
  }

  open(name, link) {
    this._popupImage.alt = name;
    this._popupImage.src = link;
    this._popupParagraph.textContent = name;
    super.open();
  }
}

export default ImagePopup;