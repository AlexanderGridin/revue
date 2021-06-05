import Component from '../../ReVue/Component.js';

class Question extends Component{
  constructor(props){
    super(props);

    this.type = 'div';
    this.attributes = {
      classNames: 'question'
    };

    this.childrens = createQuestionInner(`Вопрос №${props.number}`, props.question);
    this.setChildrens(this.childrens);

    this.build();
  }
}

function createQuestionInner(title, question){
  let childrens = [];

  let h3 = new Component();
  h3.init({
    type: 'h2',
    attributes: {
      innerText: title
    },
    childrens: [],
  });

  let questionElement = new Component();
  questionElement.init({
    type: 'div',
    attributes: {
      innerHTML: question
    },
    childrens: [],
  });

  childrens.push(h3, questionElement);
  return childrens;
}

export default Question;