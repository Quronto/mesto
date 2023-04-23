class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  };

  _toggleLike(evt) {
    evt.target.classList.toggle('card__like_active');
  };

  _handleImageClick = () => {
    this._handleCardClick(this._name, this._link);
  };

  _deleteCard(evt) {
    evt.target.closest('.card').remove();
    this._element = null;
  };

generateCard() {
  this._element = this._getTemplate();
  this._cardImage = this._element.querySelector('.card__image');
  this._setEventListeners();

  this._cardImage.src = this._link;
  this._cardImage.alt = this._name;
  this._element.querySelector('.card__paragraph').textContent = this._name;

  return this._element;
};

_setEventListeners() {
  this._cardImage.addEventListener('click', this._handleImageClick);

  this._element.querySelector('.card__delete').addEventListener('click', this._deleteCard)

  this._element.querySelector('.card__like').addEventListener('click', this._toggleLike);
}
};

export default Card;