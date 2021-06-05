import ReVue from './ReVue/ReVue.js';
import Header from './components/Header/Header.js';
import QuestionsList from './components/QuestionsList/QuestionsList.js';

ReVue.sayHello();

let header = new Header();
let questionsList = new QuestionsList();

ReVue.build([
  header,
  questionsList,
]);