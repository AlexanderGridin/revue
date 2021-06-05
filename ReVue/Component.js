import ReVue from './ReVue.js';

class Component{
  constructor(props){
    this.name = null;
    this.type = null;
    this.attributes = null;
    this.props = props;
    this.element = null;
    this.childrens = [];
    this.eventListeners = null;
    this.parent = null;
  }

  // setChildrens(...childrens){
  //   this.childrens = childrens;
  //   return this;
  // }

  init(data){
    this.type = data.type;
    this.attributes = data.attributes;
    this.childrens = data.childrens ? data.childrens : [];

    this.setChildrens(this.childrens);
    this.build();
  }

  setChildrens(childrens){
    if(childrens.length > 0){
      for(let child of childrens){
        child.parent = this;
      }
    }
    // childrens.forEach((child) => {
    //   child.parent = this;
    // });
  }

  setEventListeners(eventListeners){
    this.eventListeners = eventListeners;
    return this;
  }

  setProperties(props){
    this.props = props;
  }

  build(){
    this.element = document.createElement(this.type);

    handleElementAttributes(this.element, this.attributes);
    // handleElementChildrens(this.element, this.childrens);
    handleElementEventListeners(this.element, this.eventListeners);

    ReVue.components.push(this);
    return this;
  }

  sayHi(){
    console.log(`I am ${this.type} component!`);
    console.log(this);
  }
}

function handleElementAttributes(element, attributes){
  for(let attrName in attributes){
    switch(attrName){
      case 'classNames':
        let classNames = attributes[attrName].split(' ');
        
        classNames.forEach((name) => {
          element.classList.add(name);
        });

        break;

      case 'innerText':
        element.innerText = attributes[attrName];
        break;

      case 'innerHTML':
        element.innerHTML = attributes[attrName];
        break;

      default:
        element.setAttribute(attrName, attributes[attrName]);
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
        children.parent = element;
        element.append(children);
      }
    });
  }
}

export default Component;