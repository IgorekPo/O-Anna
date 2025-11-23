new Swiper('.swiper',{
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    autoHeight: true,
    renderBullet: function (index, className) {
      // Создайте массив с вашими названиями
      const buttonNames = ['Особистий', 'Корпоративний', 'Саморозвиток'];
      // Верните HTML-код с названием из массива
      return '<span class="' + className + '">' + buttonNames[index] + '</span>';
    },

  },  
});