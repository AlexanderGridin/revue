let questionsData = [
  {
    id: 1,
    question: '<p>Согласно определению в JavaScript <strong>undefined</strong> является свойством глобального объекта, содержащим примитивное значение <strong>undefined</strong>. Если с помощью оператора <strong>typeof</strong> определить тип данных для <strong>undefined</strong>, будет получен ответ <strong>undefined</strong>.</p> <p>Но, что получится, если сравнить ответ переданный оператором с самой переменной <strong>undefined</strong>?</p> <code>console.log(typeof undefined === undefined);</code>',
    answers: ['true', 'Крашнется браузер', 'false', 'undefined'],
    correctAnswer: 2
  },
  {
    id: 2,
    question: `<p>Функция <strong>setTimeout()</strong> является асинхронной, а это означает, что она запускается, только после выполнения всех операций в основном потоке данных JavaScript. Но, что получится, если поместить эту функцию в цикл <strong>for</strong>.</p>
    <code>
      for (var i = 0; i < 5; i++) {
        setTimeout(() => console.log(i), 0)
      }
    </code>
    <p>Какой результат будет выведен на экран после выполнения такого кода?</p>`,
    answers: ['0 1 2 3 4', '5 раз число 5', '3 1 4 2', 'Ничего не выведется'],
    correctAnswer: 1
  },
  {
    id: 3,
    question: `<p>Сложение массивов в JavaScript - простая, но интересная тема. Попробуем передать несколько массивов в функцию в качестве аргументов и вернуть в результате выполнения функции сумму переданных массивов:</p>
    <code>
      function add(a, b, c) {
        return a + b + c;
      }

      let sum = add ([1, 2], [3, 4], [5, 6]);

      console.log(sum);
    </code>
    <p>Какой результат выведется в консоли?</p>`,
    answers: ['Массив [1, 2, 3, 4, 5, 6]', 'Массив [9, 12]', 'Будет ошибка.', 'Строка "1,23,45,6"'],
    correctAnswer: 3
  }
];

export default questionsData;