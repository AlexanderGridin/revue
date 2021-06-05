const ReVue = {
  sayHello(){
    console.log('ReVue!');
  },

  components: [],

  getComponentByName(name){
    let findedComponent = this.components.find((component) => {
      return component.name === name;
    });

    return findedComponent;
  },

  createElement(type, props, eventListeners, ...childrens){
    let element = document.createElement(type);

    handleElementProps(element, props);
    handleElementEventListeners(element, eventListeners);
    handleElementChildrens(element, childrens);

    return element;
  },

  build(rootComponent){
    let app = document.querySelector('#revue-app');

    // app.append(mergeComponents(rootComponent));

    if(app && rootComponent){
      app.append(rootComponent);
    }
  }
}

function mergeComponents(parent){
  if(!parent.childrens[0].childrens){
    parent.element.append(parent.childrens[0]);
    return parent.element;
  }

  parent.childrens.forEach((child) => {
    parent.element.append(mergeComponents(child));
  });

  return parent.element;
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

      default:
        element.setAttribute(p, props[p]);
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

export default ReVue;