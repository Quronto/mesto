import '../pages/index.css';

import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import ImagePopup from '../components/ImagePopup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { 
  options,
  initialCards,
} from '../utils/constants.js';

const cardFormElement = document.querySelector('.popup__form_type_card');
const profileForm = document.querySelector('.popup__form');

const addButton = document.querySelector('.profile__add-btn');
const editButton = document.querySelector(".profile__edit-btn");

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const userInfo = new UserInfo({
  userNameSelector: '.profile__text',
  userJobSelector: '.profile__paragraph'
});

const editProfilePopup = new PopupWithForm('.popup_theme_edit', {
  handleFormSubmit: (profileInput) => {
    userInfo.setUserInfo({
      userName: profileInput.name,
      userJob: profileInput.job
    });
    editProfilePopup.close();
  }
});

editProfilePopup.setEventListeners();

editButton.addEventListener('click', changeProfile);

function changeProfile() {
  editProfilePopup.open()
  const popupUserInfo = userInfo.getUserInfo();
  nameInput.setAttribute('value', popupUserInfo.userName);
  jobInput.setAttribute('value', popupUserInfo.userJob);
}


const addCardPopup = new PopupWithForm('.popup_theme_addbutton', {
  handleFormSubmit: (addCardInput) => {
    renderInitialCards.addNewItem(createCard({
      name: addCardInput.title,
      link: addCardInput.link
    }, handleCardClick));
    addCardPopup.close();
  }
});

addCardPopup.setEventListeners();


addButton.addEventListener('click',OpenAddCardPopup);

function OpenAddCardPopup() {
  addCardPopup.open()
  //cardFormElement.resetValidation()
};


const imagePopup = new ImagePopup('.popup_theme_picture');
imagePopup.setEventListeners();



const handleCardClick = (name, link) => {
  imagePopup.open(name, link);
};


function createCard(item) {
  const newElement = new Card(item, '#card-template', handleCardClick);
  const cardElement = newElement.generateCard()
  return cardElement
};

const renderInitialCards = new Section({
  items: initialCards,
  renderer: (item) => {
    renderInitialCards.addItem(createCard(item))
  }
}, '.cards');
renderInitialCards.renderItems();


const addCardFormValidation = new FormValidator(options, cardFormElement);
addCardFormValidation.enableValidation();

const profileFormValidation = new FormValidator(options, profileForm);
profileFormValidation.enableValidation();