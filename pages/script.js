const elements = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_card');
const cardFormElement = document.querySelector('#popupFormCard');
const cardCloseButton = document.querySelector('#popupCardCloseButton');
const cardName = cardFormElement.querySelector('#formCardName');
const cardDPS = cardFormElement.querySelector('#formCardDPS'); 
const cardCrit = cardFormElement.querySelector('#formCardCrit');
const cardVers = cardFormElement.querySelector('#formCardVers');
const selectorClass = cardFormElement.querySelector('#selWOWClass');
const template = document.querySelector('#template').content;
const popups = Array.from(document.querySelectorAll('.popup')); 
const createButton = document.querySelector('#cardCreateButton');
const test = document.querySelector('#test');

const initialCards = [ //карточки из коробочки
  {
    name: 'Воин',
    dps: 72952,
    crit: 12,
    vers: 40,
    sclass: 'Воин'
  },
  {
    name: 'Охотница на демонов',
    dps: 83948,
    crit: 20,
    vers: 40,
    sclass: 'Охотник на демонов'
  },
  {
    name: 'ДК',
    dps: 73367,
    crit: 12,
    vers: 25,
    sclass: 'Рыцарь смерти'
  },
  {
    name: 'Шаман',
    dps: 66759,
    crit: 13,
    vers: 25,
    sclass: 'Шаман'
  },
  {
    name: 'Жрец',
    dps: 67664,
    crit: 14,
    vers: 68,
    sclass: 'Жрец'
  },
  {
    name: 'Охотник',
    dps: 69825,
    crit: 18,
    vers: 46,
    sclass: 'Охотник'
  },
  {
    name: 'Чернокнижник',
    dps: 64252,
    crit: 12,
    vers: 47,
    sclass: 'Чернокнижник'
  },
  {
    name: 'Паладин',
    dps: 67657,
    crit: 13,
    vers: 61,
    sclass: 'Паладин'
  },
  {
    name: 'Разбойник',
    dps: 74758,
    crit: 23,
    vers: 36,
    sclass: 'Разбойник'
  }
];

const audio = document.querySelector('.profile__add-button');
audio.addEventListener('click', function(){
  document.getElementById('audio2').play()
});

const audio2 = document.querySelector('.profile__raidbot');
audio2.addEventListener('click', function(){
  document.getElementById('audio4').play()
});

function open(elem) {
  addPopupCloseListener(elem);
  elem.classList.add('popup_opened');
  createButton.disabled = true;
  cardFormElement.reset();
  document.getElementById('err3').className = 'error';
  document.getElementById('err4').className = 'error';
  document.getElementById('err2').className = 'error';
  document.getElementById('cardCreateButton').className = 'popup__button popup__button_disabled';
  document.getElementById('cardCreateButton').textContent = 'Заполни поля';
};

function addPopupCloseListener(elem) {
  document.addEventListener('keyup', escapeClose);
  elem.addEventListener('click', popupEventHandler);
} 

function closePops(elem) {
  elem.classList.remove('popup_opened');
  document.removeEventListener('keyup', escapeClose);
  elem.removeEventListener('click' , popupEventHandler);
  document.getElementById('audio3').play()
};

function popupEventHandler (evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
    closePops(evt.target)
    closePops(evt.target.closest('.popup'));
  }
};

function escapeClose (evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePops(popup);
    document.getElementById('audio3').play()
  }
};

function addElement(dps, name, crit, vers, sclass) {
  
  const elementsItem = template.cloneNode(true);
  const cardDelete = elementsItem.querySelector('.element__trash');
  const cardDetails = elementsItem.querySelector('.element__details');
  const cardImg = elementsItem.querySelector('.element__image');
  const cardTitle = elementsItem.querySelector('.element__title');
  const cardTotal = elementsItem.querySelector('#total');
  const summ = Math.round(((+dps / 2) - ((+dps / 2)*((+crit / 2)/100))) + (((+dps / 2) - ((+dps / 2)*((+crit / 2)/100)))*((vers/2)/100)));        //Math.round((+dps / 2) + ((+dps / 2)*(((+vers / 2) - (+crit / 2))/100)));
  const summpvp = Math.round((+dps / 2) - ((+dps / 2)*((+crit / 2)/100)));
  const lose = Math.round(((+dps/2)*((+crit/2)/100)));
  const totalImage = document.querySelector('#test__image2');

  cardDelete.addEventListener('click', function(){
    document.getElementById('audio').play()
  });

  cardImg.src = sclass;
  cardTitle.textContent = name;
  cardTotal.textContent = summ;

  if (sclass === 'Воин') {
    cardImg.src = './images/Warrior.jpg';
  }
  else if (sclass === 'Паладин') {
    cardImg.src = './images/Paladin.jpg';
  }
  else if (sclass === 'Рыцарь смерти') {
    cardImg.src = './images/DeathKnight.jpg';
  }
  else if (sclass === 'Охотник') {
    cardImg.src = './images/Hunter.jpg';
  }
  else if (sclass === 'Шаман') {
    cardImg.src = './images/Shaman.jpg';
  }
  else if (sclass === 'Разбойник') {
    cardImg.src = './images/Rogue.jpg';
  }
  else if (sclass === 'Друид') {
    cardImg.src = './images/Druid.jpg';
  }
  else if (sclass === 'Монах') {
    cardImg.src = './images/Monk.jpg';
  }
  else if (sclass === 'Охотник на демонов') {
    cardImg.src = './images/DH.jpg';
  }
  else if (sclass === 'Маг') {
    cardImg.src = './images/Mage.jpg';
  }
  else if (sclass === 'Чернокнижник') {
    cardImg.src = './images/Warlock.jpg';
  }
  else if (sclass === 'Жрец') {
    cardImg.src = './images/Priest.jpg';
  }

  cardDetails.addEventListener('click', function () {
    document.getElementById('test').className = 'popup popup_opened';
    document.getElementById('audio2').play()
    document.addEventListener('keyup', closeMyCard);
    test.addEventListener('click', function(){
      document.getElementById('test').className = 'popup';
      document.getElementById('audio3').play()
    });
    document.getElementById('total2').textContent = summ + ' - PvP Power';
    document.getElementById('total8').textContent = summpvp + ' - PvP DPS';
    document.getElementById('total3').textContent = dps + ' - PvE DPS';
    document.getElementById('total4').textContent = lose + ' - DPS lose by crit';
    document.getElementById('total5').textContent = crit + '% - Crit chance';
    document.getElementById('total6').textContent = vers + '% - Versatility';
    document.getElementById('total7').textContent = name;

    function closeMyCard(evt) {
      if (evt.key === 'Escape') {
        document.getElementById('test').className = 'popup';
        document.getElementById('audio3').play()
        document.removeEventListener('keyup', closeMyCard);
      }
    };

    

    if (sclass === 'Воин') {
      totalImage.src = './images/Warrior.jpg';
    }
    else if (sclass === 'Паладин') {
      totalImage.src = './images/Paladin.jpg';
    }
    else if (sclass === 'Рыцарь смерти') {
      totalImage.src = './images/DeathKnight.jpg';
    }
    else if (sclass === 'Охотник') {
      totalImage.src = './images/Hunter.jpg';
    }
    else if (sclass === 'Шаман') {
      totalImage.src = './images/Shaman.jpg';
    }
    else if (sclass === 'Разбойник') {
      totalImage.src = './images/Rogue.jpg';
    }
    else if (sclass === 'Друид') {
      totalImage.src = './images/Druid.jpg';
    }
    else if (sclass === 'Монах') {
      totalImage.src = './images/Monk.jpg';
    }
    else if (sclass === 'Охотник на демонов') {
      totalImage.src = './images/DH.jpg';
    }
    else if (sclass === 'Маг') {
      totalImage.src = './images/Mage.jpg';
    }
    else if (sclass === 'Чернокнижник') {
      totalImage.src = './images/Warlock.jpg';
    }
    else if (sclass === 'Жрец') {
      totalImage.src = './images/Priest.jpg';
    }
  });

  cardDelete.addEventListener('click', function(evt) {
    evt.target.closest('.element').remove();
  });
  
  return elementsItem;
};

function userAddElement(evt) {
  evt.preventDefault();
  elements.prepend(addElement(cardDPS.value, cardName.value, cardCrit.value, cardVers.value, selectorClass.value));
  cardFormElement.reset();
  closePops(popupCard);
};

function initialCardsLoad () {
  initialCards.forEach(({dps, name, crit, vers, sclass}) => elements.append(addElement(dps, name, crit, vers, sclass)));
};

cardCrit.addEventListener('input', function(){
  if (cardCrit.value > 100){
    document.getElementById('err3').className = 'error error_visible';
  }
  else if(cardCrit.value < 5) {
    document.getElementById('err3').className = 'error error_visible';
  } 
  else {
    document.getElementById('err3').className = 'error';
  }
});

cardVers.addEventListener('input', function(){
  if (cardVers.value > 100){
    document.getElementById('err4').className = 'error error_visible';
  }
  else if(cardVers.value < 0) {
    document.getElementById('err4').className = 'error error_visible';
  } 
  else {
    document.getElementById('err4').className = 'error';
  }
});

cardDPS.addEventListener('input', function(){
  if (cardDPS.value > 500000){
    document.getElementById('err2').className = 'error error_visible';
  }
  else if(cardDPS.value < 1) {
    document.getElementById('err2').className = 'error error_visible';
  } 
  else {
    document.getElementById('err2').className = 'error';
  }
});

cardFormElement.addEventListener('input', function(evt) {
  if (cardCrit.value > 100 || cardCrit.value < 5 || cardVers.value > 100 || cardVers.value < 0 || cardDPS.value > 500000 || cardDPS.value < 1 || cardVers.value === '' || cardName.value === '') {
    createButton.disabled = true;
    document.getElementById('cardCreateButton').className = 'popup__button popup__button_disabled';
    document.getElementById('cardCreateButton').textContent = 'Заполни поля';
    evt.preventDefault();
  } else {
    createButton.removeAttribute('disabled')
    document.getElementById('cardCreateButton').className = 'popup__button';
    document.getElementById('cardCreateButton').textContent = 'Посчитать';
  }
});

addButton.addEventListener('click', () => {
  open(popupCard);
});
cardFormElement.addEventListener('submit', userAddElement);
initialCardsLoad();
