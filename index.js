import { LitElement, html, css } from 'lit-element';
import './src/views/lit-shoe-market';
import './src/views/lit-shoe-detail';
import './src/views/lit-shoe-cart';
import './src/components/app-link';
import { router, navigator, outlet } from 'lit-element-router';
import {cart} from './assets/icons'
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import  list from './assets/shoeList';
/**
 * This component combines all the examples to be displayed. See the basic/detail/advanced folders for the actual examples.
 */


class ShoeApp extends router(navigator(outlet(LitElement))){
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        header {
        background: rgb(76, 84, 85); 
        height: 300px;
        width: 100vw;
      }
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 6rem;
        padding: 0 3rem;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
        background:rgb(76, 84, 85); 
      }
      

      div {
        height: 0.2px;
        background-color:  #d4d6dd;
      }
      footer {
        height: 32rem;
        background: rgb(76, 84, 85); 
      }
      h1{
        margin-top:4rem;
        font-size: 2.2rem;
        letter-spacing: 2px;
      }

      h1, h4{
        color: whitesmoke;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-align: center;
        
      }
      app-link{
        color:whitesmoke;;
        text-decoration: none;
        font-family:inherit;
        text-transform: capitalize;
        font-weight: 300;
        text-align: center;
        margin: 0 1.6rem;
        font-size: 1.1rem;
        letter-spacing: 1px

      }
      svg{
        width: 2rem;
        color: whitesmoke;

      }
      span{
        width: 100%;
        display: flex;
        justify-content:center
      }
      `,
    ];
  }

  static get properties() {
    return {
      smallScreen: { type: Boolean },
      route: { type: String },
      title:{ type: Object },
      shoeList: {type: Array},
     selectShoe:{type:Object},
      params: { type: Object}, // array?
      cart: {type: Array},
      shoeFilter:{type:Array}
      
     
    
   
    }
  }
  static get routes() {
    return [
      {
        name: 'home',
        pattern: '',
      },
      {
        name: 'detail',
        pattern: 'detail/:id',
      },
      {
        name: 'cart',
        pattern: 'cart',
      },
      {
        name: 'not-found',
        pattern: '*',
      },
    ];
  }

  constructor(){
    super();
    this.route = "home";
    installMediaQueryWatcher(`(min-width: 600px)`, (matches) => {
      this.smallScreen = !matches;
    });
    this.title={ home:'Men\'s Lifestyle Shoes', detail:'Shoe', cart:''}
     this.shoeList=list;
    this.selectShoe={};
    this.params = {};
    this.cart=[];
   

  }
  
 


  router(route, params, query, data) {
    this.route = route;
    this.activeRoute = route;
    this.params=params;
    /* console.log( params); */

    this.findId();
  }

 findId(){
   this.selectShoe= this.shoeList.find(item=>item._id==this.params.id)
   this.selectShoe={...this.selectShoe}
 }
  
 handleCart(){
    this.cart= [...this.cart,this.selectShoe]
 }

 /* totalCart() {
  this.cart=[]
 const total = document.querySelector('#total');
 total.value;

  
  return this.cart.reduce((total, item) => {
    
      // De cada elemento obtenemos su precio
      const miItem = this.shoeList.filter((itemList) => {
                return itemList._id === parseInt(item);
    });

      return total + miItem[0].price;
  

  }, 0).toFixed(2);
 

} */
  render() {
    return html`
      <header>
        <nav>
          <app-link href="/"><h4>AGORA</h4></app-link>
          <app-link href="/cart">${cart}</app-link>
        </nav>
        <h1>${this.title[this.route]}</h1>
        <span>
          <app-link href="/">catalog</app-link>
          <app-link href="/cart">cart</app-link>
        </span>
      </header>
      <lit-shoe-market route="home" @select=${this.getByCategory} @cart=${this.handleCart} @filterN=${this.getByNew} @filterF=${this.getByFeature} @filterA=${this.getAll} @filterU=${this.getByComming}  .shoeList=${this.shoeList} ></lit-shoe-market> <!-- mal ?¿? -->
      <!-- faltan crear estas vistas -->
      <lit-shoe-detail route="detail" @cart=${this.handleCart} .selectShoe="${this.selectShoe}" ></lit-shoe-detail>
      <lit-shoe-cart route="cart"  .cart=${this.cart}></lit-shoe-cart>
      <h1 route="not-found">Not Found</h1>
     <!--  <footer>
        <div></div>
      </footer> -->

    `;
  }
//filtrado botones
  getByNew(){
    const aux= this.shadowRoot.getElementById('isNew');
    let shoeFilter=[]

    this.shoeList.filter((shoe)=>{
      if(shoe.isNew===true){
        shoeFilter.push(shoe)
      }
    });
    this.shoeList=[...shoeFilter]
    console.log(shoeFilter);
  }
  getByFeature(){
    const aux= this.shadowRoot.getElementById('feature');
    let shoeFilter=[]

    this.shoeList.filter((shoe)=>{
      if(shoe.featured===true){
        shoeFilter.push(shoe)
      }
    });
    this.shoeList=[...shoeFilter]
    console.log(shoeFilter);
  }
  getByComming(){
    const aux= this.shadowRoot.getElementById('upComing');
    let shoeFilter=[]

    this.shoeList.filter((shoe)=>{
      if(shoe.upcoming===true){
        shoeFilter.push(shoe)
      }
    });
    this.shoeList=[...shoeFilter]
    console.log(shoeFilter);

  }
//mal
  getAll(){
    const aux= this.shadowRoot.getElementById('todos');
    let shoeListAll= [];
    this.shoeList=[...shoeListAll]
   console.log(shoeListAll);

  }

  //filtrado conbinado
  getByCategory(){

    const aux= this.shadowRoot.getElementById('search');
    const isNew= this.shadowRoot.getElementById('isNew');
    const feature= this.shadowRoot.getElementById('feature');
    const upComing= this.shadowRoot.getElementById('upcoming');
    let shoeFilter=[];

    this.shoeList.filter((shoe)=>{
       if(shoe.isNew===true){
        shoeFilter.push(shoe)
         
        }else if(shoe.featured===false){
          shoeFilter.push(shoe)
         
        }else if(shoe.upcoming===false){
          shoeFilter.push(shoe)
         
        }
        
     
     
      

    })
    this.shoeList=[...shoeFilter]
    console.log(shoeFilter);
    }
  
  

}

customElements.define('shoe-app', ShoeApp);

