import { LitElement, html, css } from 'lit-element';

class ReflejandoAtributos extends LitElement {
  render() {
    return html`
      <my-button disabled></my-button>
      <my-button></my-button>
    `;
  }

  static get styles() {
    return css`
      my-button {
        margin: 6px;
        padding: 6px;
        text-align: center;
        cursor: pointer;
      }
      my-button[disabled] {
        cursor: not-allowed;
      }
    `;
  }
}

customElements.define('reflejando-atributos', ReflejandoAtributos);

class MyButton extends LitElement {
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true,

        // attribute: 'my-attribute'
        // también puede especificar cómo desea que se refleje el atributo
        // reflejará esta propiedad como 'my-attribute' en su elemento.
      }
    };
  }

  constructor() {
    super();
    this.disabled = false;
  }

  static get styles() {
    return css`
      .disabled {
        border: solid 2px #217FF9;
      }

      .enabled {
        border: solid 2px #9B35FA;
      }
    `;
  }

  render() {
    return html`
      <div class="${this.disabled ? 'disabled' : 'enabled'}">
        Hola universo
      </div>
    `;
  }
}

customElements.define('my-button', MyButton);