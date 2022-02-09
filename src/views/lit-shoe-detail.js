import {LitElement, html, css} from 'lit-element';
import {cart} from '../../assets/icons';
import  list from '../../assets/shoeList';


export class LitShoeDetail extends LitElement {
  static get styles() {
    return css`
 .container{
  
   display: grid;
   grid-template-columns: 1fr 1fr ;
text-align:    justify;
border-bottom: 2px dotted;
   
 }
    .btn {
      display: block;
      background-color:rgb(94, 66, 166);
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
        .right{
          margin: 50px 20px 20px;
        }
        .price{
          color: black;
          font-size: 50px;
        }
      
     
        
         
        
    `;
  }

  static get properties() {
    return {
     
        selectShoe:{type: Object},
        review:{type: Array}
    };
  }

  constructor() {
    super();
    
      
   this.review=list;
      
    
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
        
          <div class="cart">
         
          </div>
    </div>
    <div class="right">
    
        <div class="review">
      
          <app-link href="review">
            <button class="btn">Reviews</button>
          </app-link>
        </div>
      <div class="description">
        <p> Maker: ${this.selectShoe.maker}

      </div>
      <div class="description">
        <p>Colors: ${this.selectShoe.colors}

      </div>
      <div class="description">
        <p> Category: ${this.selectShoe.category}

      </div>
      
      <div class="description">
      <select id="search" value="search"><p>Size:</p>
   
          <option value="isnew">39</option>
          <option value="feature">40</option>
          <option value="upcoming">41</option>
          <option value="upcoming">42</option>
      </select>
      </div>
      <div class="description">
      <h1>Description: </h1>
        <p>${this.selectShoe.description}</p>
        A partir de las características de las Phantom GT, las Nike Jr. 
        Phantom GT2 TF presentan un diseño actualizado y unos patrones 
        gráficos que están concebidos para tirar con una precisión milimétrica. 
        El sistema de lazada descentrado despeja la zona de impacto para regatear, 
        pasar y marcar con precisión. La textura de agarre de la parte superior está
          situada estratégicamente para ofrecer un toque preciso al lanzar a puerta, 
          pasar y regatear. El sistema de lazada descentrado ofrece una mayor zona de
          contacto para los disparos potentes. Piel sintética para una mayor 
        durabilidad y facilidad de limpieza. Mayor tracción en superficies sintéticas.
          Suela que no deja marcas
      </div>
      <app-link href="/cart">
            
            <button class="btn" @click=${this.handleCart}>Añadir</button>
      </app-link>
        
      <div class="price">
                <p> $ ${this.selectShoe.price}</p>
                </div>
        
    </div>
      
</div>



   
    `;
  }

}

window.customElements.define('lit-shoe-detail', LitShoeDetail);
