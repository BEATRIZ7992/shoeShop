import {LitElement, html, css} from 'lit-element';

import '../components/app-link';
import  list from '../../assets/shoeList';

export class LitShoeMarket extends LitElement {
  static get styles() {
    return css`

    .container{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .imagen{
      height: 100px;
      width: 100px;
    }
      ul{
        list-style: none;
      }
    `;
  }

  static get properties() {
    return {
      shoeList:{type: Array}
      
    };
  }

  constructor() {
    super();
    
    this.shoeList= list
      
     
      
    
  }
  
  handleData(){
    this.shoeList=[...list]
  }
 
  seeList(){
    return console.log(this.shoeList);
  }
  
  render() {
    return html`

    <p>Shoe Market</p>

    <button @click="${() =>this.seeList()}">boton</button>
  
     <div class="container">
    ${this.shoeList.map(shoe=> {
        return html`
        <app-link href="detail/${shoe._id}">
  

        <ul >
            <li>${shoe.name}</li>
            <li>${shoe.price}$</li>
            <li><img class="imagen" src="${shoe.picture}" ></li>
            <li>${shoe.marker}</li>
        </ul> 
    </div>
 
   </app-link> `})}  
    `;
  }

}

window.customElements.define('lit-shoe-market', LitShoeMarket);
