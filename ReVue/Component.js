import ReVue from './ReVue.js';

class Component{
  constructor(component){
    this.name = null;
    this.type = component.type;
    this.props = component.props;
    this.element = null;
    this.childrens = null;
    this.eventListeners = null;
  }

  setChildrens(...childrens){
    this.childrens = childrens;
    return this;
  }

  setEventListeners(eventListeners){
    this.eventListeners = eventListeners;
    return this;
  }

  build(name){
    this.element = document.createElement(this.type);
    this.name = name;

    handleElementProps(this.element, this.props);
    handleElementChildrens(this.element, this.childrens);
    handleElementEventListeners(this.element, this.eventListeners);

    ReVue.components.push(this);
    return this.element;
  }

  sayHi(){
    console.log(`I am ${this.type} component!`);
    console.log(this);
  }
}

function handleElementProps(element, props){
  for(let p in props){
    switch(p){
      case 'classNames':
        let classNames = props[p].split(' ');
        
        classNames.forEach((name) => {
          element.classList.add(name);
        });

        break;
    }
  }
}

function handleElementEventListeners(element, eventListeners){
  if(eventListeners){
    for(let event in eventListeners){
      element.addEventListener(event, eventListeners[event], false);
    }
  }
}

function handleElementChildrens(element, childrens){
  if(childrens){
    childrens.forEach((children) => {
      if(typeof children === 'string'){
        element.innerHTML = children;
      } else {
        element.append(children);
      }
    });
  }
}

export default Component;