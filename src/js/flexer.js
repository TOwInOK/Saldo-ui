// Получаем элементы по их ID и классам
const flexerButton = document.getElementById('flexer_button');
const flexer = document.getElementById('flexer');
const flexerElements = document.querySelectorAll('.flexer-element');
const flexerSubElements = document.querySelectorAll('.flexer-sub-element');

// Функция для переключения классов элемента
const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

// Функция для обработки каждого элемента с классом 'flexer-element'
const processFlexerElement = (flexerElement) => {
  toggleClass(flexerElement, 'grid-cols-1', !flexerElement.classList.contains('grid-cols-1'));
  toggleClass(flexerElement, 'grid-cols-2');
  toggleClass(flexerElement, 'md:grid-cols-3');
  toggleClass(flexerElement, 'items-center');
};

// Функция для обработки каждого элемента с классом 'flexer-sub-element'
const processFlexerSubElement = (flexerSubElement) => {
  let innerChild = flexerSubElement.querySelector('div');
  const hasGridCols1 = flexerSubElement.classList.contains('grid-cols-1');

  toggleClass(flexerSubElement, 'grid-cols-1', !hasGridCols1);
  toggleClass(flexerSubElement, 'md:col-span-2');
  toggleClass(flexerSubElement, 'md:grid-cols-3');
  toggleClass(flexerSubElement, 'grid-cols-2');
  toggleClass(flexerSubElement, 'items-start');
  toggleClass(flexerSubElement, 'items-center');

  if (innerChild) {
    toggleClass(innerChild, 'md:col-span-2', !hasGridCols1);
  }
};

// Функция для обработки всех элементов при клике на кнопку
const handleClick = () => {
  requestAnimationFrame(() => {
    // Переключаем классы для элемента с id 'flexer'
    toggleClass(flexer, 'grid', !flexer.classList.contains('grid'));
    toggleClass(flexer, 'flex', !flexer.classList.contains('grid'));
    toggleClass(flexer, 'flex-col', !flexer.classList.contains('grid'));

    // Обрабатываем каждый элемент с классом 'flexer-element'
    flexerElements.forEach(processFlexerElement);

    // Обрабатываем каждый элемент с классом 'flexer-sub-element'
    flexerSubElements.forEach(processFlexerSubElement);
  });
};

// Добавляем обработчик события на клик по кнопке
flexerButton.addEventListener('click', handleClick);
