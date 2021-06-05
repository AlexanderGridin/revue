import Component from '../../ReVue/Component.js';
import ReVue from '../../ReVue/ReVue.js';

let ButtonPrimary = new Component({
  type: 'button',
  props: {
    classNames: 'btn btn-primary',
    type: 'button'
  },
});

let ButtonSecondary = new Component({
  type: 'button',
  props: {
    classNames: 'btn btn-secondary',
    type: 'button'
  },
});

let ButtonsWrapper = new Component({
  type: 'div',
  props: {
    classNames: 'buttons-wrapper'
  }
});


export {ButtonsWrapper, ButtonPrimary, ButtonSecondary};