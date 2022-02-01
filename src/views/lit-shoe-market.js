import {LitElement, html, css} from 'lit-element';
import '../components/app-link';

export class LitShoeMarket extends LitElement {
  static get styles() {
    return css`
      
    `;
  }

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();
    
  }

  render() {
    return html`
    <p>Shoe Market</p>
    <app-link href="detail">detail</app-link>
    `;
  }

}

window.customElements.define('lit-shoe-market', LitShoeMarket);
