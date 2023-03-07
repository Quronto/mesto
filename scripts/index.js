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

//попапы
const popupProfile = document.querySelector('.popup_theme_profile-edit');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');

const popupAddPlace = document.querySelector('.popup_theme_place-add');
const buttonOpenPopupAddPlace = document.querySelector('.profile__add-button');

const popupImage = document.querySelector('.popup_theme_pic');
const buttonOpenPopupImage = document.querySelector('.popup__image');

const popups = document.querySelectorAll('.popup');

//Открытие попапов
function openPopup(popups) {
  popups.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popups.addEventListener('mousedown', closePopupCurrent);
};

function closePopup(popups) {
  popups.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  popups.removeEventListener('mousedown', closePopupCurrent);
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

//Открытие попапа с увеличением картинки
const openPopupImage = () => {
  openPopup(popupImage);
};

const closeButtonImage = () => {
  closePopup(popupImage);
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

// изменение имени
const formElementProfile = document.forms["profile-form"];
const nameInput = document.querySelector(".form__text_type_name");
const jobInput = document.querySelector(".form__text_type_job");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");


function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = `${nameInput.value}`;
  profileStatus.textContent = `${jobInput.value}`;
  closePopupProfile();
};

formElementProfile.addEventListener('submit', handleProfileFormSubmit);


// удаление карточки
const handleDelete = (evt) => {
  evt.target.closest('.element').remove();
}


// создание карточки
const template = document.querySelector('#card');
const cardsWrapper = document.querySelector(".elements");
const formElementCardAdd = document.forms["card-form"];
const elements = document.querySelector('.elements');

const popupParagraph = document.querySelector(".popup__place-text");
const popupPic = document.querySelector(".popup__image");


function createCard(item) {
  const newElement = template.content.querySelector('.element').cloneNode(true);
  const cardImage = newElement.querySelector('.element__image');
  const cardParagraph = newElement.querySelector('.element__place');

  cardParagraph.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  newElement.querySelector('.element__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button-like_active_add');
  });

  const deleteButton = newElement.querySelector('.element__del-button');
  deleteButton.addEventListener('click', handleDelete);

  cardImage.addEventListener('click', function () {
    popupPic.src = item.link;
    popupPic.alt = item.name;
    popupParagraph.textContent = item.name;
    openPopupImage();
  });
  return newElement;
}

// добавление карточек из массива
initialCards.forEach(function (element) {
  const newElement = createCard(element);
  elements.append(newElement);
});


const placeInput = document.querySelector('.form__text_type_place');
const linkInput = document.querySelector('.form__text_type_img');

// форма и добавление карточки
formElementCardAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const item = {
    name: placeInput.value,
    link: linkInput.value
  }
  const newElement = createCard(item);

  elements.prepend(newElement);

  closeButtonAddPlace();

  evt.target.reset();
});

//закртыие на кнопку 
const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    popups.forEach(closePopup);
  }
};
//закрытие на оверлей
const closePopupCurrent = (evt) => {
  if (evt.target === evt.currentTarget) {
    popups.forEach(closePopup);
  }
};

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

enableValidation(options);


