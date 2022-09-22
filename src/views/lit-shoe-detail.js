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
      
        #form {
          width: 250px;
          margin: 0 auto;
          height: 50px;
        }
        
        #form p {
          text-align: center;
        }
        
        #form label {
          font-size: 40px;
        }
        
        input[type="radio"] {
          display: none;
        }
        
        label {
          color: grey;
        }
        
        .clasificacion {
          
          unicode-bidi: bidi-override;
        }
        
        label:hover,
        label:hover ~ label {
          color: orange;
        }
        
        input[type="radio"]:checked ~ label {
          color: orange;
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


//ampliar la imagen
 ver(e){
   document.onmousemove= ver;
  var x, y, x1, x2, y1, y2;
  fact= 800/400;
  opp=100;

  if(e==null) e= window.event;
  x= e.clientX;
  y= e.clientY;

  x1=-opp+(x)*fact;
  y1=-opp+(y)*fact;
  x2=+opp+(x)*fact;
  y2=+opp+(y)*fact;

  document.images.grande.style.display='inline';
  document.images.grande.style.left=(x)=(1-fact);
  document.images.grande.style.top=(y)=(1-fact)
  document.images.grande.style.clip="rect("+y1+"px,"+x2+"px,"+y2+"px,"+x1+"px)";

}


  
  render() {
    return html`


<div class="container">
     <div class="card">
          <div class="name">
            <h2> ${this.selectShoe.name}</h2>
          </div>

          <div class="picture" >
           <img class=img1  src="${this.selectShoe.picture}">
          
          </div>
        
          <div class="cart">
         
          </div>
    </div>
    <div class="right">
    
        <div class="review">
      
          <app-link href="${this.selectShoe._id}/review">
            <button class="btn">Reviews</button>
            <div class="valoracion">

            <form>
          <p class="clasificacion">
            <input id="radio1" type="radio" name="estrellas" value="5"><!--
            --><label for="radio1">★</label><!--
            --><input id="radio2" type="radio" name="estrellas" value="4"><!--
            --><label for="radio2">★</label><!--
            --><input id="radio3" type="radio" name="estrellas" value="3"><!--
            --><label for="radio3">★</label><!--
            --><input id="radio4" type="radio" name="estrellas" value="2"><!--
            --><label for="radio4">★</label><!--
            --><input id="radio5" type="radio" name="estrellas" value="1"><!--
            --><label for="radio5">★</label>
          </p>
        </form>
  
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
