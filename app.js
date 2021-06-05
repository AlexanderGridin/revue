import ReVue from './ReVue/ReVue.js';
import {ButtonsWrapper, ButtonPrimary, ButtonSecondary} from './components/Buttons/Buttons.js';
import data from './data.js';

console.log(data)

ReVue.sayHello();

let buttonPrimary = ButtonPrimary
  .setChildrens('Тестовая кнопка')
  .setEventListeners({
    click: buttonPrimaryClick
  })
  .build('buttonPrimary');

let buttonPrimary2 = ButtonPrimary
  .setChildrens('Тестовая кнопка 3')
  .setEventListeners({
    click: buttonPrimaryClick
  })
  .build('buttonPrimary2');

let buttonSecondary = ButtonSecondary
  .setChildrens('Тестовая кнопка2')
  .build('buttonSecondary');

let buttonsWrapper = ButtonsWrapper
  .setChildrens(buttonPrimary, buttonSecondary, buttonPrimary2)
  .build('buttonsWrapper');

  
ReVue.build(buttonsWrapper);
console.log(ReVue.components);

function buttonPrimaryClick(){
  let buttonSecondary = ReVue.getComponentByName('buttonSecondary');
  buttonSecondary.element.style.border = '3px solid red';
  console.log(buttonSecondary.element);

  let buttonPrimary2 = ReVue.getComponentByName('buttonPrimary2');
  buttonPrimary2.element.style.border = '3px solid red';
}