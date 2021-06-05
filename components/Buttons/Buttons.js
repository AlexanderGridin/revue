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
    this.eventListeners = {
      click: function(){
        console.log(this.textContent);
        this.parentElement.parentElement.parentElement.parentElement.remove();
      }
    };

    this.build();
  }
}

export default ButtonPrimary;