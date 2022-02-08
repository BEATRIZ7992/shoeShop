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
        .btn {
          display: block;
          background: grey;
          color: white;
          
          margin: 10px;
          border-radius: 5px;
          box-shadow: rgba(0,0,0,0.9);
          transition: all 200ms ease-in-out;
          text-decoration: none;
          
         
         
        }
        .btn:hover {
          background: #6d85b1;
        }
        .filtros{
          display: flex;
          
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
  //vista de carro
  handleCart(){
    this.dispatchEvent(new CustomEvent('cart'))
    console.log('cart');
  }
 //boton lista
/*   seeList(){
    return console.log(this.shoeList);
  } */

  //mandar filtros
 handleFilterN(){
  this.dispatchEvent(new CustomEvent('filterN'))
  console.log('filterN');
 }
 handleFilterF(){
  this.dispatchEvent(new CustomEvent('filterF'))
  console.log('filterF');
 }
 handleFilterU(){
  this.dispatchEvent(new CustomEvent('filterU'))
  console.log('filterU');
 }
 handleFilterA(){
  this.dispatchEvent(new CustomEvent('filterA'))
  console.log('filterA');
 }

//filtro conbinado select
 handleFilterSelect(){
  this.dispatchEvent(new CustomEvent('select'))
  console.log('select');
 }


 //////
  render() {
    return html`

   
<!-- filtrado botones -->
  <!--  <button @click="${() =>this.seeList()}">boton</button> -->
  <div class="filtros">Filtrar por:
  <button class="btn" id="isNew" @click="${() =>this.handleFilterN()}">New </button>
  <button class="btn" id="feature" @click="${() =>this.handleFilterF()}">Feature</button>
  <button class="btn" id="upComing" @click="${() =>this.handleFilterU()}">Comming </button>
  <button class="btn" id="upComing" @click="${() =>this.handleFilterA()}">All </button>
  </div> 
  
 <!--  filtrado select -->
  <div >
   <select id="search" value="search" @change="${this.handleFilterSelect}">
   
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
