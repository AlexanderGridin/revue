import Component from '../../ReVue/Component.js';

class Header extends Component{
  constructor(){
    super();

    this.type = 'header';
    this.attributes = {
      classNames: 'header'
    };

    this.childrens = getHeaderInner();
    this.setChildrens(this.childrens);

    this.build();
  }
}

function getHeaderInner(){
  let items = [];

  let h1 = new Component();
  h1.init({
    type: 'h1',
    attributes: {
      classNames: 'page-title',
      innerText: 'Кто хочет стать миллионером?'
    }
  });

  items.push(h1);
  return items;
}

export default Header;