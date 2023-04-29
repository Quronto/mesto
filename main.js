(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._options=e,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(this._options.inputSelector)),this._buttonElement=this._form.querySelector(this._options.submitButtonSelector)}var r,n;return r=t,(n=[{key:"_showInputError",value:function(t,e){var r=this._form.querySelector("#".concat(t.id,"-error"));t.classList.add(this._options.inputErrorClass),r.textContent=e,r.classList.add(this._options.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._options.inputErrorClass),e.classList.remove(this._options.errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._options.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._options.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"clearFormErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners(),this._toggleButtonState()}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();const n=r;function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var a=function(){function t(e,r,n,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._card=e,this._cardName=this._card.name,this._cardLink=this._card.link,this._templateSelector=r,this._userId=n,this._cardId=o.cardId,this._authorId=o.authorId,this._cardZoom=i.handleCardZoom,this._cardDelete=i.handleCardDelete,this._putLike=i.handleCardLike,this._removeLike=i.handleCardDeleteLike,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardLike=this._element.querySelector(".card__like"),this._cardDeleteElement=this._element.querySelector(".card__delete"),this.likeCounter=this._element.querySelector(".card__like-counter"),this._setEventListeners()}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"renderCardLike",value:function(t){this._likeArea=t.likes,this.likeCounter.textContent=this._likeArea.length,this._availabilityLike()?this._cardLike.classList.add("card__like_active"):this._cardLike.classList.remove("card__like_active")}},{key:"_availabilityLike",value:function(){var t=this;return this._likeArea.some((function(e){return e._id===t._userId}))}},{key:"_toggleLike",value:function(){this._availabilityLike()?this._removeLike(this._cardId):this._putLike(this._cardId)}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){return t._cardZoom(t._cardName,t._cardLink)})),this._cardLike.addEventListener("click",(function(){return t._toggleLike()})),this._userId!==this._authorId?this._cardDeleteElement.remove():this._cardDeleteElement.addEventListener("click",(function(){return t._cardDelete(t,t._cardId)}))}},{key:"generateCard",value:function(){return this._cardImage.src=this._cardLink,this._cardImage.alt=this._cardLink,this._element.querySelector(".card__paragraph").textContent=this._cardName,this.renderCardLike(this._card),this._element}},{key:"deleteCard",value:function(){this._element.remove()}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const u=a;function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,s(n.key),n)}}function s(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}const f=function(){function t(e){var r,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=void 0,(n=s(n="s"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup_opened"))&&t.close()}))}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},h.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}const m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(n);if(o){var r=v(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupParagraph=e._popup.querySelector(".popup__paragraph"),e}return e=a,(r=[{key:"open",value:function(t,e){this._popupImage.alt=t,this._popupImage.src=e,this._popupParagraph.textContent=t,h(v(a.prototype),"open",this).call(this)}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},S.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}const w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(o){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var r,n=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._handleFormSubmit=n,r._popupForm=r._popup.querySelector(".popup__form"),r._inputList=r._popupForm.querySelectorAll(".popup__input"),r._popupSubmit=r._popup.querySelector(".popup__submit"),r}return e=a,(r=[{key:"setEventListeners",value:function(){var t=this;S(k(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"textSavingLoad",value:function(){this._popupSubmit.textContent="Сохранение..."}},{key:"textSaving",value:function(){this._popupSubmit.textContent="Сохранить"}},{key:"textCreateLoad",value:function(){this._popupSubmit.textContent="Создание..."}},{key:"textCreate",value:function(){this._popupSubmit.textContent="Создать"}},{key:"close",value:function(){S(k(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}const C=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"addNewItem",value:function(t){this._container.prepend(t)}}])&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}const P=function(){function t(e){var r=e.userNameSelector,n=e.userJobSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(r),this._userJob=document.querySelector(n),this._avatarLink=document.querySelector(o)}var e,r;return e=t,(r=[{key:"setUserInfo",value:function(t){var e=t.userName,r=t.userJob;this._userName.textContent=e,this._userJob.textContent=r}},{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userJob:this._userJob.textContent}}},{key:"setUserAvatar",value:function(t){this._avatarLink.src=t}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},x.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}const D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(n);if(o){var r=R(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var r,n=e.callbackConfirmation;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._submitButton=r._popup.querySelector(".popup__form"),r._callbackConfirmation=n,r}return e=a,(r=[{key:"open",value:function(t,e){this._cardElement=t,this._cardId=e,x(R(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;this._submitButton.addEventListener("submit",(function(e){e.preventDefault(),t._callbackConfirmation(t._cardElement,t._cardId)})),x(R(a.prototype),"setEventListeners",this).call(this)}}])&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}var A=function(){function t(e){var r=e.baseUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=r,this._headers=n}var e,r;return e=t,(r=[{key:"_errorChecking",value:function(t){return t.ok?t.json():Promise.reject("Код ошибки: ".concat(t.status))}},{key:"getUserData",value:function(){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then((function(e){return t._errorChecking(e)}))}},{key:"sendAvatarData",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._errorChecking(t)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then((function(e){return t._errorChecking(e)}))}},{key:"addNewCard",value:function(t){var e=this,r=t.name,n=t.link;return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:r,link:n})}).then((function(t){return e._errorChecking(t)}))}},{key:"sendUserData",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t.name,about:t.job})}).then((function(t){return e._errorChecking(t)}))}},{key:"deleteCardId",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/").concat(t),{headers:this._headers,method:"DELETE"}).then((function(t){return e._errorChecking(t)}))}},{key:"putLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/").concat(t,"/likes"),{headers:this._headers,method:"PUT"}).then((function(t){return e._errorChecking(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/").concat(t,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(t){return e._errorChecking(t)}))}}])&&N(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var J=document.querySelector(".popup__form_type_card"),V=document.querySelector(".popup__form"),Z=document.querySelector(".profile__add-btn"),H=document.querySelector(".profile__edit-btn"),M=document.querySelector(".popup__input_type_name"),z=document.querySelector(".popup__input_type_job"),$=document.querySelector(".popup__form_type_avatar"),G=document.querySelector(".profile__pencil"),K=new A({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64/",headers:{authorization:"c789fcdf-9f7f-4e04-8108-ebde8b3c26a9","Content-Type":"application/json"}}),Q=new P({userNameSelector:".profile__text",userJobSelector:".profile__paragraph",avatarSelector:".profile__avatar"}),W=new w(".popup_theme_edit",{handleFormSubmit:function(t){W.textSavingLoad(),K.sendUserData(t).then((function(t){Q.setUserInfo({userName:t.name,userJob:t.about}),W.close()})).catch((function(t){alert("Ошибка при редактировании профиля ".concat(t))})).finally((function(){W.textSaving()}))}});W.setEventListeners(),H.addEventListener("click",(function(){W.open();var t=Q.getUserInfo();M.value=t.userName,z.value=t.userJob,at.clearFormErrors()})),Promise.all([K.getUserData(),K.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];et=o._id,Q.setUserInfo({userName:o.name,userJob:o.about}),ot.renderItems(i),Q.setUserAvatar(o.avatar)})).catch((function(t){alert("Произошла ошибка ".concat(t))}));var X=new w(".popup_theme_addbutton",{handleFormSubmit:function(t){X.textCreateLoad(),K.addNewCard({name:t.title,link:t.link}).then((function(t){ot.addNewItem(nt(t)),X.close()})).catch((function(t){alert("ошибка при добавлении карточки ".concat(t))})).finally((function(){X.textCreate()}))}});X.setEventListeners(),Z.addEventListener("click",(function(){X.open(),it.clearFormErrors()}));var Y=new w(".popup_theme_avatar",{handleFormSubmit:function(t){Y.textSavingLoad(),K.sendAvatarData(t).then((function(t){Q.setUserAvatar(t.avatar),Y.close()})).catch((function(t){alert("ошибка при обновлении аватарки ".concat(t))})).finally((function(){Y.textSaving()}))}});Y.setEventListeners(),G.addEventListener("click",(function(){Y.open()}));var tt=new D(".popup_theme_delete",{callbackConfirmation:function(t,e){K.deleteCardId(e).then((function(){t.deleteCard(),tt.close()})).catch((function(t){alert("ошибка при удалении карточки ".concat(t))}))}});tt.setEventListeners();var et,rt=new m(".popup_theme_picture");rt.setEventListeners();var nt=function(t){var e=new u(t,"#card-template",et,{cardId:t._id,authorId:t.owner._id},{handleCardZoom:function(t,e){rt.open(t,e)},handleCardDelete:function(t,e){tt.open(t,e)},handleCardLike:function(t){K.putLike(t).then((function(t){e.renderCardLike(t)})).catch((function(t){console.log("Произошла ошибка ".concat(t))}))},handleCardDeleteLike:function(t){K.deleteLike(t).then((function(t){e.renderCardLike(t)})).catch((function(t){console.log("Произошла ошибка, ".concat(t))}))}});return e.generateCard()},ot=new C({renderer:function(t){ot.addItem(nt(t))}},".cards"),it=new n(B,J);it.enableValidation();var at=new n(B,V);at.enableValidation(),new n(B,$).enableValidation()})();
//# sourceMappingURL=main.js.map