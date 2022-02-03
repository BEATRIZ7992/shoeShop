import {LitElement, html, css} from 'lit-element';
import {cart} from '../../assets/icons';



export class LitShoeDetail extends LitElement {
  static get styles() {
    return css`
 .container{
  margin: 10px 0;
  
 
    border-bottom: 2px dotted $color-four
 }
    .btn {
      display: block;
      background: grey;
      color: white;
      padding: 15px 20px;
      margin: 20px 0;
      border-radius: 5px;
      box-shadow: rgba(0,0,0,0.9);
      transition: all 200ms ease-in-out;
      text-decoration: none;
     
    }
    .btn:hover {
      background: #6d85b1;
    }
    .card {
      background: white;
      box-shadow: 0 0 20px rgba(0,0,0,0.4);
      border-radius: 5px;
      margin: 50px 20px 20px 20px;
      padding: 20px;
      text-align: center;
      color:black;
      float: left;
    }
    .card:hover{
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
border: none;
outline: none;

transition: 0.3s;
    }
    
      ul{
        padding: 0;
      margin: 20px 0 50px 0;
      list-style-type: none;
     
      }  
      li {
        margin: 10px 0;
        font-size: 14px;
       
        }
    `;
  }

  static get properties() {
    return {
     
        selectShoe:{type: Object}
    };
  }

  constructor() {
    super();
    
      
   
      
    
  }
  
handleCart(){
  this.dispatchEvent(new CustomEvent('cart'))
  console.log('cart');
}
 
  
  render() {
    return html`


<div class="container">
    <div class="card">
          <div class="name">
            <h2> ${this.selectShoe.name}</h2>
          </div>

          <div class="picture">
           <img src="${this.selectShoe.picture}">
          </div>
          <div class="price">
          <p> $ ${this.selectShoe.price}</p>
          </div>
          <div class="cart">
          <app-link href="/cart">
          <button class="btn" @click=${this.handleCart}>Añadir</button>
          </app-link>
          </div>
      </div>
</div>



   
    `;
  }

}

window.customElements.define('lit-shoe-detail', LitShoeDetail);
