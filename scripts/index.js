const editButton = document.querySelector(".profile__edit-button_type_edit");

const popup = document.querySelector(".popup");

const closeButton = popup.querySelector(".popup__close");


function toggleOpenClosePopup(){
  popup.classList.toggle("popup_opened");
};

editButton.addEventListener("click", toggleOpenClosePopup);
closeButton.addEventListener("click", toggleOpenClosePopup);

let formElement = popup.querySelector(".popup__form");

let nameInput = popup.querySelector(".popup__text_type_name");

let jobInput = popup.querySelector(".popup__text_type_job");

let profileName = document.querySelector(".profile__name");
let profileStatus = document.querySelector(".profile__status");

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.value = '';
    profileStatus.value = '';

    profileName.textContent = `${nameInput.value}`;
    profileStatus.textContent = `${jobInput.value}`;
    toggleOpenClosePopup();
};

formElement.addEventListener('submit', handleFormSubmit);