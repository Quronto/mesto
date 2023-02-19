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
const buttonClosePopupProfile = document.querySelector('.popup__close-profile');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');

const popupAddPlace = document.querySelector('.popup_theme_place-add');
const buttonOpenPopupAddPlace = document.querySelector('.profile__add-button');
const buttonClosePopupAddPlace = document.querySelector('.popup__place-close');

const popupImage = document.querySelector('.popup_theme_pic');
const buttonOpenPopupImage = document.querySelector('.popup__image');
const buttonClosePopupImage = document.querySelector('.popup__close-pic');

const popups = document.querySelectorAll('.popup');

//Открытие попапов
function openPopup(popups) {
  popups.classList.add('popup_opened');
};

function closePopup(popups) {
  popups.classList.remove('popup_opened');
}

//Открытие попапа с изменением профиля
const toggleOpenPopupProfile = () => {
  openPopup(popupProfile);
  nameInput.value = `${profileName.textContent}`;
  jobInput.value = `${profileStatus.textContent}`;
};

const toggleClosePopupProfile = () => {
  closePopup(popupProfile);
};

//Открытие попапа с добавлением карточки
const toggleOpenPopupAddPlace = () => {
  openPopup(popupAddPlace);
};

const toggleCloseButtonAddPlace = () => {
  closePopup(popupAddPlace);
};

//Открытие попапа с увеличением картинки
const toggleOpenPopupImage = () => {
  openPopup(popupImage);
};

const toggleCloseButtonImage = () => {
  closePopup(popupImage);
};

//вызов для попапов
buttonClosePopupProfile.addEventListener('click', toggleClosePopupProfile);
buttonOpenPopupProfile.addEventListener('click', toggleOpenPopupProfile);

buttonOpenPopupAddPlace.addEventListener('click', toggleOpenPopupAddPlace);
buttonClosePopupAddPlace.addEventListener('click', toggleCloseButtonAddPlace);

//buttonOpenPopupImage.addEventListener('click', toggleOpenPopupImage);
//buttonClosePopupImage.addEventListener('click', toggleCloseButtonImage);


// изменение имени
const formElementProfile = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__text_type_name");
const jobInput = document.querySelector(".popup__text_type_job");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");


function handleFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = `${nameInput.value}`;
  profileStatus.textContent = `${jobInput.value}`;
  toggleClosePopupProfile();
};

formElementProfile.addEventListener('submit', handleFormSubmit);


// удаление карточки
const handleDelete = (evt) => {
  evt.target.closest('.element').remove();
}


// создание карточки
const template = document.querySelector('#card');
const cardsWrapper = document.querySelector(".elements");
const formElementCardAdd = document.querySelector('.popup__form-second');
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
    toggleOpenPopupImage();
  });
  return newElement;
}

// добавление карточек из массива
initialCards.forEach(function (element) {
  const newElement = createCard(element);
  elements.append(newElement);
});


const placeInput = document.querySelector('.popup__text_type_place');
const linkInput = document.querySelector('.popup__text_type_img');

// форма и добавление карточки
formElementCardAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const item = {
    name: placeInput.value,
    link: linkInput.value
  }
  const newElement = createCard(item);

  elements.prepend(newElement);

  toggleCloseButtonAddPlace();

  evt.target.reset();
});

buttonClosePopupImage.addEventListener('click', toggleCloseButtonImage);