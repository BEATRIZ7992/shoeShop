import { LitElement, html } from 'lit-element';

class UpdatedDemo extends LitElement {

  static get properties() {
    return {
      focused: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.focused = false;
  }

  render() {
    return html`
      <input id="amountInput" type="number" name="amount" @blur="${() => this.focused = false}">
      Focused: ${this.focused}
      <button @click="${() => this.focused = true}">Focus input</button>
    `;
  }

  // La función de render debe permanecer pura sin efectos secundarios. El callback udated se llama
  // cada vez que el DOM del elemento se ha actualizado y renderizado. Utiliza esto para observar y actuar a partir de los cambios de propiedad.
  updated(changedProperties) {
    if (changedProperties && changedProperties.get('focused') === false) {
      // Hace 'focus' en el 'input', cada vez que 'focused cambia de falso
      this.shadowRoot.getElementById('amountInput').focus();
    }
  }

}

customElements.define('updated-demo', UpdatedDemo);