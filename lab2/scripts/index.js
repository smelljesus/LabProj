// @todo: Темплейт карточки

// @todo: DOM узлы

const cardTemplate = document.getElementById('card-template');
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(name, link) {
    const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  
  cardElement.querySelector('.card__title').textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  
  cardImage.addEventListener('click', () => {
    handleCardClick(name, link);
  });
  
  return cardElement;

}

function handleCardClick(name, link) {
  const popupImage = document.querySelector('.popup_type_image');
  const popupImageElement = popupImage.querySelector('.popup__image');
  const popupCaption = popupImage.querySelector('.popup__caption');
  
  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupCaption.textContent = name;
  
  openModal(popupImage);
}


// @todo: Функция удаления карточки

placesList.addEventListener('click', (event) => {
    if (event.target.classList.contains('card__delete-button')) {
        event.target.closest('.card').remove();
    }

    if (event.target.classList.contains('card__like-button')) {
        event.target.classList.toggle('card__like-button_active');
    }
});

// @todo: Вывести карточки на страницу

initialCards.forEach(card => {
    placesList.appendChild(createCard(card.name, card.link));
});



// Popup
const profileEditButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
const closeButtons = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('.popup');

const btnEditProfile = document.querySelector('.popup-edit__button');

const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_new-card');
const btnNewPlace = document.querySelector('.btn-add-new-place');

function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeByEscape);
}
function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}


profileAddButton.addEventListener('click', () => {
    openModal(popupAddCard);
});
btnNewPlace.addEventListener('click', () => {
    const popupInputName = document.querySelector('.popup__input_type_card-name').value;
    const popupInputUrl = document.querySelector('.popup__input_type_url').value;

    placesList.appendChild(createCard(popupInputName, popupInputUrl));
    closePopup(popupAddCard)
})

profileEditButton.addEventListener('click', () => {
    openModal(popupEditProfile);

    const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
    const jobInput = popupEditProfile.querySelector('.popup__input_type_description');
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');

    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
});

btnEditProfile.addEventListener('click', () => {
    const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
    const jobInput = popupEditProfile.querySelector('.popup__input_type_description');
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');

    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;


    closePopup(popupEditProfile)
})


closeButtons.forEach(button => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});


popups.forEach(popup => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target === popup) {
            closePopup(popup);
        }
    });
});



