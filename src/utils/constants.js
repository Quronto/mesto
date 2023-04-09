export const options = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


const arkhyz = new URL('../images/arkhyz.jpg', import.meta.url);
const chelyabinskOblast = new URL('../images/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovo = new URL('../images/ivanovo.jpg', import.meta.url);
const kamchatka = new URL('../images/kamchatka.jpg', import.meta.url);
const kholmogorskyRayon = new URL('../images/kholmogorsky-rayon.jpg', import.meta.url);
const baikal = new URL('../images/baikal.jpg', import.meta.url);


export const initialCards = [
  {
    name: 'Архыз',
    link: arkhyz
  },
  {
    name: 'Челябинская область',
    link: chelyabinskOblast
  },
  {
    name: 'Иваново',
    link: ivanovo
  },
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Холмогорский район',
    link: kholmogorskyRayon
  },
  {
    name: 'Байкал',
    link: baikal
  }
];