import Component from '../../ReVue/Component.js';
import Question from '../Question/Question.js';
import Actions from '../Actions/Actions.js';

class Card extends Component{
  constructor(props){
    super(props);

    this.type = 'div';
    this.attributes = {
      classNames: 'card'
    }
    this.childrens = [
      new Question({
        number: props.number,
        question: props.question
      }),

      new Actions({
        answers: props.answers
      }),
  ];
    this.setChildrens(this.childrens);
    this.build();
  }
}

export default Card;