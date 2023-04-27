import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import ImagePopup  from '../components/ImagePopup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import { Api } from '../components/Api.js';
import { apiRequest } from '../utils/apiRequest.js';
import { options } from '../utils/constants.js';

import '../pages/index.css';


const cardFormElement = document.querySelector('.popup__form_type_card');
const profileForm = document.querySelector('.popup__form');

const addButton = document.querySelector('.profile__add-btn');
const editButton = document.querySelector('.profile__edit-btn');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const avatarFormElement = document.querySelector('.popup__form_type_avatar');
const profilePencil = document.querySelector('.profile__pencil');

const api = new Api(apiRequest);



const userInfo = new UserInfo({
  userNameSelector: '.profile__text',
  userJobSelector: '.profile__paragraph',
  avatarSelector: '.profile__avatar'
});


const editProfilePopup = new PopupWithForm('.popup_theme_edit', {
  handleFormSubmit: (profileData) => {
    editProfilePopup.textSavingLoadingData();
    api.sendUserData(profileData)
      .then((res) => {
        userInfo.setUserInfo({ userName: res.name, userJob: res.about });
        editProfilePopup.close();
      })
      .catch((err) => {
        alert(`При редактировании профиля произошла ошибка ${err}`);
      })
      .finally(() => {
        editProfilePopup.textSaving();
      })
  }
});

editProfilePopup.setEventListeners();

editButton.addEventListener('click', function () {
  editProfilePopup.open();
  const popupUserInfo = userInfo.getUserInfo();
  nameInput.value = popupUserInfo.userName;
  jobInput.value = popupUserInfo.userJob;
  profileFormValidation.clearFormErrors()
})

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([ProfileData, cardObject]) => {
    userId = ProfileData._id;
    userInfo.setUserInfo({ userName: ProfileData.name, userJob: ProfileData.about });
    renderInitialCards.renderItems(cardObject);
    userInfo.setUserAvatar(ProfileData.avatar);
  })
  .catch((err) => { alert(`Произошла ошибка ${err}`) })


const addCardPopup = new PopupWithForm('.popup_theme_addbutton', {
  handleFormSubmit: (addCardInput) => {
    addCardPopup.textCreateLoadingData();
    api.addNewCard({
      name: addCardInput.title,
      link: addCardInput.link
    })
      .then((card) => {
        renderInitialCards.addNewItem(renderCard(card));
        addCardPopup.close();
      })
      .catch((err) => {
        alert(`При добавлении карточки произошла ошибка ${err}`)
      })
      .finally(() => {
        addCardPopup.textCreate();
      })
  }
});
addCardPopup.setEventListeners();


addButton.addEventListener('click', function () {
  addCardPopup.open()
  addCardFormValidation.clearFormErrors();
})


const popupChangeProfile = new PopupWithForm('.popup_theme_avatar', {
  handleFormSubmit: (avatarLink) => {
    popupChangeProfile.textSavingLoadingData();
    api.sendAvatarData(avatarLink)
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        popupChangeProfile.close();
      })
      .catch((err) => {
        alert(`При обновлении аватарки произошла ошибка ${err}`);
      })
      .finally(() => {
        popupChangeProfile.textSaving();
      })
  }
})
popupChangeProfile.setEventListeners();

profilePencil.addEventListener('click', function () {
  popupChangeProfile.open()
})



const popupWithConfirmaDelete = new PopupWithConfirm('.popup_theme_delete', {
  callbackConfirmation: (cardElement, cardId) => {
    api.deleteCardId(cardId)
      .then(() => {
        cardElement.deleteCard();
        popupWithConfirmaDelete.close();
      })
      .catch((err) => {
        alert(`При удалении карточки произошла ошибка ${err}`)
      })
  }
});
popupWithConfirmaDelete.setEventListeners();



const picturePopup = new ImagePopup(".popup_theme_picture");
picturePopup.setEventListeners();



let userId;

const renderCard = function (cardObject) {
  const cardItem = new Card(cardObject, '#card-template', userId, { cardId: cardObject._id, authorId: cardObject.owner._id, }, {

    handleCardZoom: (name, link) => {
      picturePopup.open(name, link)
    },

    handleCardDelete: (cardElement, cardId) => {
      popupWithConfirmaDelete.open(cardElement, cardId)
    },

    handleCardLike: (cardId) => {
      api.putLike(cardId)
        .then((res) => {
          cardItem.renderCardLike(res)
        })
        .catch((err) => {
          console.log(`Произошла ошибка ${err}`)
        })
    },

    handleCardDeleteLike: (cardId) => {
      api.deleteLike(cardId)
        .then((res) => {
          cardItem.renderCardLike(res)
        })
        .catch((err) => {
          console.log(`Произошла ошибка, ${err}`)
        })
    },
  });
  return cardItem.generateCard();
}

const renderInitialCards = new Section({
  renderer: (cardObject) => {
    renderInitialCards.addItem(renderCard(cardObject));
  }
}, '.cards')



const addCardFormValidation = new FormValidator(options, cardFormElement);
addCardFormValidation.enableValidation();


const profileFormValidation = new FormValidator(options, profileForm);
profileFormValidation.enableValidation();


const popupChangeProfileFormValidation = new FormValidator(options, avatarFormElement);
popupChangeProfileFormValidation.enableValidation()