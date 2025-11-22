const burgerMenu = document.querySelector ('.header__burger');
const headerMenu = document.querySelector ('.header__menu')
const inputTel = document.querySelector ('.consultation__input')
burgerMenu.addEventListener ('click' , function(){
   burgerMenu.classList.toggle ('active');
   headerMenu.classList.toggle ('active');

});

const items = [
  document.querySelector(".item__thre1"),
  document.querySelector(".item__thre2"),
  document.querySelector(".item__thre3"),
];
const texts = [
  document.querySelector(".first__thre"),
  document.querySelector(".second__thre"),
  document.querySelector(".third__thre"),
];

//  2. Устанавливаем-назначаем начальное активное состояние
texts[0].classList.add("active");
items[0].classList.add("active");
// 3. Проходим циклом по массиву кнопок
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    // 3. Сначала убираем класс 'active' со ВСЕХ текстовых блоков
    texts.forEach((text) => {
      text.classList.remove("active");
    });
    items.forEach((tittle) => {
      tittle.classList.remove("active");
    });
    items[index].classList.add("active");
    // 4. Затем добавляем класс 'active' только к СООТВЕТСТВУЮЩЕМУ текстовому блоку
    texts[index].classList.add("active");
  });
});
