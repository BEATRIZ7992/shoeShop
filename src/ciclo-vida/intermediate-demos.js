import { LitElement, html, css } from 'lit-element';
import './01-first-updated.js';
import './02-updated-demo.js';
import './03-ciclo-vida.js';
import './04-propiedades-computadas.js';
import './05-acceso-dom.js';
import './06-reflejando-atributos.js';
import './07-slotting-demo.js';

class IntermediateDemos extends LitElement {
  static get properties() {
    return {
      showLifecycleDemo: { type: Boolean }
    }
  }

  constructor(){
    super();
    this.showLifecycleDemo = false;
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
        }
        a {
          text-decoration: none;
        }
        .demo > *:not(h2):not(a):not(button) {
          display: block;
          border: 1px solid	#e2e2e2;
          border-radius: 5px;
          padding: 8px;
          margin: 8px 0;
          line-height: 32px;
        }
        paper-card { 
          border-radius: 5px;
          flex: 1; 
          padding: 12px;
          margin: 0 0 32px 0;
        }
        h2 {
          font-size: 20px;
          color: #2c3e50;
        }
        h2:hover::after { 
          color: #9B35FA;
          content: " #";
        }
        h1 {
          margin-top: 0px;
          color: #9B35FA;
        }
      `,
    ];
  }

  render() {
    return html` 
      <paper-card>
        <div class="demo">
          <h2>01 First updated</h2></a>
          <first-updated></first-updated>
        </div>
      </paper-card>
      <paper-card>
        <div class="demo">
          <h2>02 Updated</h2></a>
          <updated-demo></updated-demo>
        </div>
      </paper-card>
      <paper-card>
        <div class="demo">
          <h2>03 Ciclo de vida</h2></a>
          <ciclo-vida></ciclo-vida>
        </div>
      </paper-card>
      <paper-card>
        <div class="demo">
          <h2>04 Propiedades computadas</h2></a>
          <propiedades-computadas></propiedades-computadas>
        </div>
      </paper-card>
      <paper-card>
        <div class="demo">
          <h2>05 Acceso a los elementos del DOM</h2></a>
          <acceso-dom></acceso-dom>
        </div>
      </paper-card>
      <paper-card>
        <div class="demo">
          <h2>06 Reflejando atributos</h2></a>
          <reflejando-atributos></reflejando-atributos>
        </div>
      </paper-card>
      <paper-card>
        <div class="demo">
          <h2>07 Slotting</h2></a>
          <slotting-demo></slotting-demo>
        </div>
      </paper-card>
    `;
  }
}

customElements.define('intermediate-demos', IntermediateDemos);