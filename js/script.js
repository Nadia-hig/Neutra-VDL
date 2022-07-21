
"use strict"


const SCREEN_1100 = window.matchMedia("(max-width:1100px)"),
   SCREEN_750 = window.matchMedia("(max-width:750px)");

const headerList = document.querySelector('.header__list'),
   headerLogo = document.querySelector('.header__logo'),
   headerTickets = document.querySelector('.header__tickets'),
   ticketsSmall = document.querySelector('.tickets__small'),
   headerTicketsArrow = document.querySelector('.header__tickets_arrow'),
   burger = document.querySelector('.burger'),
   neutra = document.querySelector('.neutra'),
   neutraContainer = document.querySelector('.neutra__container'),
   neutraContainer1100 = document.querySelector('.neutra__container1100'),
   about = document.querySelector('.about'),
   aboutInfo = document.querySelector('.about__info'),
   aboutMenu = document.querySelector('.about__menu'),
   photo = document.querySelector('.photo');

if (matchMedia) {
   SCREEN_1100.addListener(changes1100);
   changes1100(SCREEN_1100);
}
function changes1100(SCREEN_1100) {
   if (SCREEN_1100.matches) {
      headerList.remove();
      aboutMenu.remove();
      neutra.after(neutraContainer1100);
      neutraContainer.remove();
   }
   else {
      headerLogo.after(headerList);
      aboutInfo.after(aboutMenu);
      neutraContainer1100.remove();
      neutra.after(neutraContainer);
   }
}

if (matchMedia) {
   SCREEN_750.addListener(changes750);
   changes750(SCREEN_750);
}
function changes750(SCREEN_750) {
   if (SCREEN_750.matches) {
      headerTickets.remove();
      burger.before(ticketsSmall);
      about.remove();
   }
   else {
      burger.before(headerTickets);
      ticketsSmall.remove();
      photo.before(about);
   }
}

const houseMenu = document.querySelector('.house__menu'),
   withLineG = document.querySelector('.with-line-g'),
   houseImg = document.getElementById("houseImg"),
   houseBtn01 = document.getElementById("houseBtn01"),
   houseBtn02 = document.getElementById("houseBtn02"),
   houseBtn03 = document.getElementById("houseBtn03"),
   houseBtn04 = document.getElementById("houseBtn04"),
   houseBtn05 = document.getElementById("houseBtn05"),
   houseBtn06 = document.getElementById("houseBtn06");


houseBtn01.addEventListener("click", () => {
   houseImg.src = 'img/main/house/01.jpg';
});
houseBtn02.addEventListener("click", () => {
   houseImg.src = 'img/main/house/02.jpg';
});
houseBtn03.addEventListener("click", () => {
   houseImg.src = 'img/main/house/03.jpg';
});
houseBtn04.addEventListener("click", () => {
   houseImg.src = 'img/main/house/04.jpg';
});
houseBtn05.addEventListener("click", () => {
   houseImg.src = 'img/main/house/05.jpg';
});
houseBtn06.addEventListener("click", () => {
   houseImg.src = 'img/main/house/06.jpg';
});





