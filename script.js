const burgerMenu = document.querySelector ('.header__burger');
const headerMenu = document.querySelector ('.header__menu')
const inputTel = document.querySelector ('.consultation__input')
burgerMenu.addEventListener ('click' , function(){
   burgerMenu.classList.toggle ('active');
   headerMenu.classList.toggle ('active');

})

inputTel.addEventListener ('click', function(){
   inputTel.classList.add ('active');
})