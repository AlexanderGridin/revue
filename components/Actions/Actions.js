import Component from '../../ReVue/Component.js';
import ButtonPrimary from '../Buttons/Buttons.js';

class Actions extends Component{
  constructor(props){
    super(props);

    this.type = 'ul'
    this.attributes = {
      classNames: 'actions'
    };

    this.childrens = getAnswers(props.answers);
    this.setChildrens(this.childrens);

    this.build();
  }
}

function getAnswers(arr){
  let answers = [];

  arr.forEach((answer) => {
    let li = new Component({
      text: answer
    });

    li.init({
      type: 'li',
      childrens: [
        new ButtonPrimary({
          text: answer
        })
      ]
    });

    answers.push(li);
  });

  return answers;
}

export default Actions;