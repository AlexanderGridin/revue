import Component from '../../ReVue/Component.js';
import data from '../../data/data.js';
import Card from '../Card/Card.js';

class QuestionsList extends Component{
  constructor(props){
    super(props);

    this.type = 'ul';
    this.attributes = {
      classNames: 'questions-list'
    }

    this.childrens = createQuestionsCards(data);
    this.setChildrens(this.childrens);

    this.build();
  }
}

function createQuestionsCards(data){
  let cards = [];

  data.forEach((dataItem, i) => {
    let li = new Component();

    let questionCard = new Card({
      answers: dataItem.answers,
      question: dataItem.question,
      correctAnswer: dataItem.correctAnswer,
      number: i+1,
    });

    li.init({
      type: 'li',
      attributes: {
        classNames: 'questions-list__item'
      },
      childrens: [questionCard]
    });

    cards.push(li);
  });

  return cards;
}

export default QuestionsList;
