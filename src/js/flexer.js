document.getElementById('flexer_button').addEventListener('click', function() {
  // Получаем элемент по его ID
  let flexer = document.getElementById('flexer');
  // Получаем все элементы с классом 'flexer-element'
  let flexerElements = document.querySelectorAll('.flexer-element');
  let flexerSubElements = document.querySelectorAll('.flexer-sub-element');

  requestAnimationFrame(() => {
    // Переключаем классы для элемента с id 'flexer'
    flexer.classList.toggle('grid');
    flexer.classList.toggle('flex', !flexer.classList.contains('grid'));
    flexer.classList.toggle('flex-col', !flexer.classList.contains('grid'));

    // Меняем классы для каждого элемента с классом 'flexer-element'
    flexerElements.forEach(flexerElement => {
      const hasGridCols1 = flexerElement.classList.contains('grid-cols-1');
      flexerElement.classList.toggle('grid-cols-1', !hasGridCols1);
      flexerElement.classList.toggle('grid-cols-2');
      flexerElement.classList.toggle('md:grid-cols-3');
      flexerElement.classList.toggle('items-center');
    });

    // Меняем классы для каждого элемента с классом 'flexer-sub-element'
    flexerSubElements.forEach(flexerSubElement => {
      let innerChild = flexerSubElement.querySelector('div');
      const hasGridCols1 = flexerSubElement.classList.contains('grid-cols-1');
      flexerSubElement.classList.toggle('grid-cols-1', !hasGridCols1);
      flexerSubElement.classList.toggle('md:col-span-2');
      flexerSubElement.classList.toggle('md:grid-cols-3');
      flexerSubElement.classList.toggle('grid-cols-2');
      if (innerChild) {
        innerChild.classList.toggle('md:col-span-2', !hasGridCols1);
      }
    });
  });
});