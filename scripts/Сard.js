import { closePopup, openPopup, popupImage, popupPic, popupParagraph } from './index.js';

class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
  };

  _getTemplate() {
    const templateElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return templateElement;
  };

  _openPopup() {
    openPopup(popupImage)
    popupPic.src = this._link;
    popupPic.alt = this._name;
    popupParagraph.textContent = this._name;
  }

  _closePopup() {
    closePopup(popupImage)
  }

  _deleteCard() {
    this._element.remove();
  }
  
  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openPopup();
  })
  this._element.querySelector('.element__del-button').addEventListener('click', () => {
      this._deleteCard();
  })
  this._element.querySelector('.element__button-like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__button-like_active_add');
  })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const image = this._element.querySelector('.element__image');
    const title = this._element.querySelector('.element__place');

    image.src = this._link;
    image.alt = this._name;
    title.textContent = this._name;

    return this._element;
    };
};

export default Card;