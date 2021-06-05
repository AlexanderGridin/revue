
let testElement = ReVue.createElement(
  'div',
  {
    classNames: 'class-1 class-2'
  },
  {
    click: clickTestComponent
  },
  ReVue.createElement(
    'p',
    {},
    false,
    '1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam libero porro tenetur! Similique, aspernatur! Beatae atque magnam id ad perferendis nulla laudantium, et commodi reiciendis quia sapiente maiores, vero aspernatur eaque repellat tempore dolorem!'
  ),
  ReVue.createElement(
    'p',
    {},
    false,
    '2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam libero porro tenetur! Similique, aspernatur! Beatae atque magnam id ad perferendis nulla laudantium, et commodi reiciendis quia sapiente maiores, vero aspernatur eaque repellat tempore dolorem!'
  )
);

function clickTestComponent(e){
  e.preventDefault();
  e.stopPropagation();

  console.log(this);
  this.remove();
}

// ReVue.mount(testElement);

// console.log(testElement);

/* -------------------------------- */
/* Костя, не смотри пожалуйста этот код....он ужасен :((( и это пока прототип.
/* -------------------------------- */

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

const gameBoard = document.querySelector('.board');
const TOTAL_GAME_COSTS = 1000000;
const stepCost = Math.round(TOTAL_GAME_COSTS / questionsData.length);
let earnedCosts = 0;
let earnedCostsWidgetContent = document.querySelector('.earned-moneys .content');
let createdCards = [];



questionsData.forEach(function(item){
  let createdCard = createQuestionCard(item);
  createdCards.push(createdCard);
});

createdCards.forEach(function(card){
  gameBoard.append(card);
});

function createQuestionCard(data){
  let card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-id', data.id);

  let question = document.createElement('div');
  question.classList.add('card__question');
  let questionTitle = document.createElement('h2');
  questionTitle.classList.add('question-title');
  questionTitle.textContent = 'Вопрос:';
  question.innerHTML = data.question;
  question.prepend(questionTitle);

  let answers = document.createElement('ol');
  answers.classList.add('answers');

  data.answers.forEach(function(answer, i){
    let li = document.createElement('li');

    let answerButton = document.createElement('button');
    answerButton.setAttribute('type', 'button');
    answerButton.classList.add('answer-button');
    answerButton.textContent = answer;
    answerButton.setAttribute('value', i);

    answerButton.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();

      let answerValue = +this.value;
      let questionId = +this.parentElement.parentElement.parentElement.getAttribute('data-id');
      console.log(answerValue, questionId);
      let questionCard = questionsData.filter(function(item){
        return questionId === item.id;
      });
      questionCard = questionCard[0];
      console.log(questionCard);
      if(questionCard.correctAnswer === answerValue){
        card.classList.add('correct');
        this.classList.add('correct');
        createdCards.pop();
        if(createdCards.length > 0){
          earnedCosts = Math.round(earnedCosts + stepCost);
          earnedCostsWidgetContent.textContent = earnedCosts;
        } else {
          earnedCosts = Math.round(earnedCosts + stepCost + 1);
          earnedCostsWidgetContent.textContent = earnedCosts;
        }
        setTimeout(function(){
          card.remove();
          if(createdCards.length === 0){
            let isNewGame = confirm('Теперь Вы миллионер!!! Сыграть ещё раз?');
            if(isNewGame){
              window.location.reload();
            }
          }
        }, 1000);
      } else {
        card.classList.add('error');
        this.classList.add('error');
        setTimeout(function(){
          let isNewGame = confirm('К сожалению, Вы проиграли... Сыграть ещё раз?');
          if(isNewGame){
            window.location.reload();
          }
        }, 1000);
      }
    });

    li.append(answerButton);
    answers.append(li);
  });

  card.append(question);
  card.append(answers);

  return card;
}