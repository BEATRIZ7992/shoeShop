import { LitElement, html, css } from 'lit-element';
import './src/views/lit-shoe-market';
import './src/components/app-link'
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
        background: #d4d6dd;
        height: 32rem;
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
        height: 20rem;
        background-color: #d4d6dd;
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
      params: { type: Object}  // array?
     
    
   
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
    this.title={ home:'Men\'s Lifestyle Shoes', detail:'zapatillas', cart:''}
    this.params = list;

  }

  router(route, params, query, data) {
    this.route = route;
    this.activeRoute = route;
    this.params._id=params;
    console.log( params);
  }

 
  

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
      <lit-shoe-market route="home">${this.params.id}</lit-shoe-market> <!-- mal ?¿? -->
      <!-- faltan crear estas vistas -->
      <lit-shoe-detail route="detail"></lit-shoe-detail>
      <lit-shoe-cart route="cart">${this.route}</lit-shoe-cart>
      <h1 route="not-found">Not Found</h1>
      <footer>
        <div></div>
      </footer>

    `;
  }

}

customElements.define('shoe-app', ShoeApp);

