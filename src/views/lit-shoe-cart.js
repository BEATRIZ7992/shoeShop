import {LitElement, html, css} from 'lit-element';

import  list from '../../assets/shoeList';



export class LitShoeCart extends LitElement {
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
        list-style: none;
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
      .btn {
        color: #fff;
        background-color: #d9534f;
        border-color: #d43f3a;
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;}
    `;
  }

  static get properties() {
    return {
        CartNumero:{type:Number},
        cart:{type: Array},
        list: {type: Array}
    };
  }

  constructor() {
    super();
    
      
   this.cart=[]
   this.list=list;
      
    this.CartNumero=0;
  }
  
  vaciasCart(){
    this.cart1=[];
    this.cart=[...this.cart1];
    

  }

  borrarItemCart(event){
    this.cart=[]
    const id = event.target.id;
    this.cart= this.cart.filter((item => item.id !== id))
 
    
  }
  
 get totalCart() {
   /* this.CartNumero=0;
  
   const DOMtotal = document.getElementById('total');
    
    return this.cart.reduce((total, item) => {
      
        // De cada elemento obtenemos su precio
        const miItem = this.list.filter((itemList) => {
                  return itemList._id === parseInt(item);
      });
  
        return this.CartNumero + miItem[0].price;
    
  
    }, 0).toFixed(2); */
   this.CartNumero=0;
   this.cart.map(cart=>{
     this.CartNumero += Number(cart.price)
   })
  
  }


 
  
  render() {
    return html`

<aside class="col-sm-4">
            <h2>Carrito</h2>
            <!-- Elementos del carrito -->
            
            <hr>
            <!-- Precio total -->
            <p class="text-right" ${this.totalCart} >Total:<span id="total">${this.CartNumero}</span>&euro;</p>
            <button @click=${this.vaciasCart} id="boton-vaciar" class="btn btn-danger">Vaciar</button>
        </aside>
<div class="container">
    ${this.cart.map(cart=> {
        return html`
        <div class="card">
        <ul >
          <div class="item">
            <li>${cart.name}</li>
            <li>${cart.price}$</li>
            <li><img class="imagen" src="${cart.picture}" ></li>
            <li>${cart.marker}</li>
          <button class="btn"  @click=${this.borrarItemCart}>x</button>
          </div>
          
        </ul> </div>
        
    </div>
 
   `})}




   
    `;
  }

}

window.customElements.define('lit-shoe-cart', LitShoeCart);
