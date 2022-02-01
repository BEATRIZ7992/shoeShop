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
    <!-- ${this.shoeList.map(shoe=> {
        return html`
    <app-link href="detail" param=${shoe}>
        <ul>
            <li>shoe</li>
        </ul>
    </app-link> -->
    `})}
    `;
  }

}

window.customElements.define('lit-shoe-market', LitShoeMarket);
