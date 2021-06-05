import ReVue from './ReVue/ReVue.js';
import data from './data.js';

import Card from './components/Card/Card.js';

ReVue.sayHello();

let questions = [];

data.forEach((dataItem, i) => {
  questions.push(new Card({
    answers: dataItem.answers,
    question: dataItem.question,
    correctAnswer: dataItem.correctAnswer,
    number: i+1,
  }));
});

ReVue.build(questions);

// console.log(ReVue.components)
// console.log(build);
console.log(data);

