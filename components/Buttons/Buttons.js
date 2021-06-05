import Component from '../../ReVue/Component.js';

class ButtonPrimary extends Component{
  constructor(props){
    super(props);

    this.type = 'button';
    this.attributes = {
      type: 'button',
      classNames: 'button',
      innerText: props.text
    };
    this.build();
  }
}

export default ButtonPrimary;