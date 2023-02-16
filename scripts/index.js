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

const editButton = document.querySelector(".profile__edit-button");

const popup = document.querySelector(".popup");

const popupPlaceAdd = document.querySelector(".popup_theme_place-add");

const closeButton = popup.querySelector(".popup__close");

const addButton = document.querySelector(".profile__add-button");

const closePlaceAddButton = document.querySelector(".popup__place-close");

const popupImage = document.querySelector('.popup__image');

const templateImg = document.querySelector('.element__image');



const toggleOpenPopupPlace = () => {
  popupPlaceAdd.classList.toggle("popup_opened");
}

const toggleClosePopupPlace = () => {
  popupPlaceAdd.classList.toggle("popup_opened");
}

function toggleOpenPopupProfile(){
  popup.classList.toggle("popup_opened");
  nameInput.value = `${profileName.textContent}`;
  jobInput.value = `${profileStatus.textContent}`;
};

function toggleClosePopupProfile(){
  popup.classList.toggle("popup_opened");
};

const formElementProfile = popup.querySelector(".popup__form");

const nameInput = popup.querySelector(".popup__text_type_name");

const jobInput = popup.querySelector(".popup__text_type_job");

const profileName = document.querySelector(".profile__name");

const profileStatus = document.querySelector(".profile__status");

function handleFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = `${nameInput.value}`;
    profileStatus.textContent = `${jobInput.value}`;
    toggleClosePopupProfile();
};

formElementProfile.addEventListener('submit', handleFormSubmit);


editButton.addEventListener("click", toggleOpenPopupProfile);
closeButton.addEventListener("click", toggleClosePopupProfile);
addButton.addEventListener("click", toggleOpenPopupPlace);
closePlaceAddButton.addEventListener("click", toggleClosePopupPlace);


const template = document.querySelector('#card');
const cardsWrapper = document.querySelector(".elements");

initialCards.forEach(function (element) {
  const cardElement =  template.cloneNode(true).content;

  const templateImg = cardElement.querySelector('.element__image');
  const templateText = cardElement.querySelector('.element__place');

  templateText.textContent = element.name;
  templateImg.src = element.link;

  cardElement.querySelector('.element__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button-like_active_add');
  });
  
  const delButton = cardElement.querySelector('.element__del-button');

  delButton.addEventListener('click', deleteCard);

  templateImg.addEventListener('click', function () {
    popupImage.src = element.link;
    popupText.textContent = element.name;
    toggleOpenPopupAddImage();
  });


  cardsWrapper.append(cardElement);
});

function deleteCard(event) {
  event.target.closest('.element').remove();
};






const formElementCardAdd = document.querySelector('.popup__form-second')
const placeInput = document.querySelector('.popup__text_type_place');
const linkInput = document.querySelector('.popup__text_type_img');

const popupAddImage = document.querySelector('.popup_theme_pic');
const popupCloseImg = document.querySelector('.popup__close-third');
const popupText = document.querySelector('.popup__place-text');



function addElements(evt) {
  evt.preventDefault();
  const cardElement =  template.cloneNode(true).content;

  const templateImg = cardElement.querySelector('.element__image');
  const templateText = cardElement.querySelector('.element__place');


  templateText.textContent = `${placeInput.value}`;
  templateImg.src = `${linkInput.value}`;

  cardElement.querySelector('.element__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button-like_active_add');
  });

  const delButton = cardElement.querySelector('.element__del-button');

  delButton.addEventListener('click', deleteCard);

  templateImg.addEventListener('click', function(){
    popupImage.src = `${templateImg.src}`;
    popupText.textContent = templateText.textContent;
    toggleOpenPopupAddImage();
  });
  

  evt.target.reset();

  toggleClosePopupPlace();
  cardsWrapper.prepend(cardElement);
}

formElementCardAdd.addEventListener('submit', addElements);


const toggleOpenPopupAddImage = () => {
  popupAddImage.classList.toggle("popup_opened");
};

const toggleClosePopupAddImage = () => {
  popupAddImage.classList.toggle("popup_opened");
}

popupCloseImg.addEventListener('click', toggleClosePopupAddImage);