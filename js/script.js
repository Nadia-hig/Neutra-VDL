
const screen1100 = window.matchMedia("(max-width:1100px)");
const screen750 = window.matchMedia("(max-width:750px)");

let headerList = document.querySelector('.header__list');
let headerLogo = document.querySelector('.header__logo');
let headerTickets = document.querySelector('.header__tickets');
let burger = document.querySelector('.burger');

let neutra = document.querySelector('.neutra');
let neutraContainer = document.querySelector('.neutra__container');
let neutraContainer1100 = document.querySelector('.neutra__container1100');

let about = document.querySelector('.about');
let aboutInfo = document.querySelector('.about__info');
let aboutMenu = document.querySelector('.about__menu');
let photo = document.querySelector('.photo');

if (matchMedia) {
   screen1100.addListener(changes1100);
   changes1100(screen1100);
}
function changes1100(screen1100) {
   if (screen1100.matches) {
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
   screen750.addListener(changes750);
   changes750(screen750);
}
function changes750(screen750) {
   if (screen750.matches) {
      headerTickets.remove();
      about.remove();
   }
   else {
      burger.before(headerTickets);
      photo.before(about);
   }
}




