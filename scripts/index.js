import Card from './Сard.js';
import FormValidator from './FormValidator.js';

export { closePopup, openPopup, popupImage, popupPic, popupParagraph };

const options = {
  formSelector: '.form',
  inputSelector: '.form__text',
  submitSelector: '.popup__save',
  inputSectionSelector: '.form__section',
  inputErrorSelector: '.form__input-error',
  inputErrorClass: 'form__input-error_active',
  inputErrorLineClass: 'form__text_active',
  disabledButtonClass: 'popup__save_inactive',
};



//enableValidation(options);

const popupImage = document.querySelector('.popup_theme_pic');
const popupPic = popupImage.querySelector('.popup__image');
const popupParagraph = popupImage.querySelector('.popup__place-text');
const elements = document.querySelector('.elements');
const formElementCardAdd = document.forms["card-form"];
//попапы
const popupProfile = document.querySelector('.popup_theme_profile-edit');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const popupAddPlace = document.querySelector('.popup_theme_place-add');
const buttonOpenPopupAddPlace = document.querySelector('.profile__add-button');
const popups = document.querySelectorAll('.popup');
// изменение имени
const formElementProfile = document.forms["profile-form"];
const nameInput = document.querySelector(".form__text_type_name");
const jobInput = document.querySelector(".form__text_type_job");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");

const placeInput = document.querySelector('.form__text_type_place');
const linkInput = document.querySelector('.form__text_type_img');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//Открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('mousedown', closePopupCurrent);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener('mousedown', closePopupCurrent);
};

//Открытие попапа с изменением профиля
const openPopupProfile = () => {
  openPopup(popupProfile);
  nameInput.value = `${profileName.textContent}`;
  jobInput.value = `${profileStatus.textContent}`;
};

const closePopupProfile = () => {
  closePopup(popupProfile);
};

//Открытие попапа с добавлением карточки
const openPopupAddPlace = () => {
  openPopup(popupAddPlace);
};

const closeButtonAddPlace = () => {
  closePopup(popupAddPlace);
};

//вызов для попапов

buttonOpenPopupProfile.addEventListener('click', openPopupProfile);

buttonOpenPopupAddPlace.addEventListener('click', openPopupAddPlace);

//закрытие всех попапов на крестик
const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//изменение имени
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = `${nameInput.value}`;
  profileStatus.textContent = `${jobInput.value}`;
  closePopupProfile();
};

formElementProfile.addEventListener('submit', handleProfileFormSubmit);

// добавление карточек из массива
initialCards.forEach((element) => {
  const newElement = new Card(element, '#card');
  const createCard = newElement.generateCard();
  elements.prepend(createCard);
});

// форма и добавление карточки
formElementCardAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();

  initialCards.name = placeInput.value;
  initialCards.link = linkInput.value;

  const newElement = new Card(initialCards, '#card');
  const createCard = newElement.generateCard();

  elements.prepend(createCard);

  closeButtonAddPlace();

  evt.target.reset();
});

//закртыие на кнопку попапов
const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    popups.forEach(closePopup);
  }
};
//закрытие на оверлей попапов
const closePopupCurrent = (evt) => {
  if (evt.target === evt.currentTarget) {
    popups.forEach(closePopup);
  }
};

const profileFormValidation = new FormValidator(options, formElementProfile);
profileFormValidation.enableValidation();

const addCardValidation = new FormValidator(options, formElementCardAdd);
addCardValidation.enableValidation();