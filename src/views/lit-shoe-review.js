import {LitElement, html, css} from 'lit-element';

import  list from '../../assets/shoeList';



export class LitShoeReview extends LitElement {
  static get styles() {
    return css`


    `;
  }

  static get properties() {
    return {
        review:{type:Array}
        
    };
  }

  constructor() {
    super();
    
      this.review=list;
 
  }
  
  



 
  
  render() {
    return html`


          <div class="container">
        <!--   ${this.review.review.map(shoe=> {
        return html`
        <app-link href="detail/${shoe._id}">
  
<div class="card">
        <ul >
          <div class="item">
            <strong><li></li></strong>
          
            <li><img class="imagen" src="${shoe.picture}" ></li>
            <li>${shoe.marker}</li>
              <strong><li class="price">${shoe.price}$</li></strong>
          </div>
          
        </ul> </app-link> <app-link href="cart"><button @click=${this.handleCart}>+</button></app-link>
    </div>
 
   </div>`})} -->
          </div>
 
   




   
    `;
  }

}

window.customElements.define('lit-shoe-review', LitShoeReview);
