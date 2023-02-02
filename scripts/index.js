const editButton = document.querySelector(".profile__edit-button");

const popup = document.querySelector(".popup");

const closeButton = popup.querySelector(".popup__close");

function toggleOpenPopup(){
  popup.classList.toggle("popup_opened");
  nameInput.value = `${profileName.textContent}`;
  jobInput.value = `${profileStatus.textContent}`;
};

function toggleClosePopup(){
  popup.classList.toggle("popup_opened");
};

let formElement = popup.querySelector(".popup__form");

let nameInput = popup.querySelector(".popup__text_type_name");

let jobInput = popup.querySelector(".popup__text_type_job");

let profileName = document.querySelector(".profile__name");
let profileStatus = document.querySelector(".profile__status");

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.value = ``;
    profileStatus.value = ``;

    profileName.textContent = `${nameInput.value}`;
    profileStatus.textContent = `${jobInput.value}`;
    toggleClosePopup();
};

formElement.addEventListener('submit', handleFormSubmit);

editButton.addEventListener("click", toggleOpenPopup);
closeButton.addEventListener("click", toggleClosePopup);