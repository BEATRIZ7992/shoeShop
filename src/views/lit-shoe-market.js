import {LitElement, html, css} from 'lit-element';
import '../components/app-link';



export class LitShoeMarket extends LitElement {
  static get styles() {
    return css`

    .container{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .imagen{
      height: 200px;
      width: 200px;
    }
      ul{
        padding: 0;
      margin: 20px 0 50px 0;
      list-style-type: none;
     
      }  
      li {
        margin: 10px 0;
        font-size: 14px;
       
          border-bottom: 2px dotted $color-four;
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
        .price{
          color: blue;
          font-size: 20px;
        }
    `;
  }

  static get properties() {
    return {
      shoeList:{type: Array},
     
      
    };
  }

  constructor() {
    super();
    
    
      
     
      
    
  }
  
  handleCart(){
    this.dispatchEvent(new CustomEvent('cart'))
    console.log('cart');
  }
 
  seeList(){
    return console.log(this.shoeList);
  }

  //mandar filtros
 handleFilter(){
  this.dispatchEvent(new CustomEvent('filter'))
  console.log('filter');
 }
 
  
  render() {
    return html`

   

   <button @click="${() =>this.seeList()}">boton</button>
  
    <div >
  <select id="search" value="search" @change="${this.handleFilter}">
    <option value="0">Select</option>
    <option value="todos">Todos</option>
    <option value="isnew">New</option>
    <option value="feature">Feature</option>
    <option value="upcoming">Coming</option>
  </select>
</div> 


     <div class="container">
    ${this.shoeList.map(shoe=> {
        return html`
        <app-link href="detail/${shoe._id}">
  
<div class="card">
        <ul >
          <div class="item">
            <strong><li>${shoe.name}</li></strong>
          
            <li><img class="imagen" src="${shoe.picture}" ></li>
            <li>${shoe.marker}</li>
              <strong><li class="price">${shoe.price}$</li></strong>
          </div>
          
        </ul> </app-link> <app-link href="cart"><button @click=${this.handleCart}>+</button></app-link>
    </div>
 
   </div>`})}  
    `;
   
  }

}

window.customElements.define('lit-shoe-market', LitShoeMarket);
