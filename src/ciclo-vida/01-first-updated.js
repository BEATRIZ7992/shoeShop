import { LitElement, html } from 'lit-element';

export default class FirstUpdated extends LitElement {

  render() {
    return html`
      <form id="form" @submit="${this.propSubmit}">
        Auto focused: <input id="amountInput" type="number" name="amount">
        <button>Submit button</button>
      </form>
    `;
  }

  // El método firstUpdated se llama después de que el DOM del elemento se haya actualizado por primera vez. Esta
  // se puede usar como un momento para manejar el trabajo que debe hacerse solo una vez después de la primera actualización,
  // como consultar nodos dom o llamar a métodos sobre elementos.
  //
  // En general usar funciones puras y plantillas(templates) declarativas a través de la función render
  // es preferido. Usar esto solo si no hay otra manera.
  firstUpdated(changedProperties) {
    // Almacene una referencia al elemento del formulario para facilitar el acceso
    this._form = this.shadowRoot.getElementById('form');

    // Enfoque automático del campo de entrada de cantidad en el renderizado inicial
    this.getAmountInput();
  }

  /**
   *
   * Para poder tomar este elemento es posible que no esté renderizado todavía
   * es necesario esperar a que termine la renderización y actualización de los elementos,
   * y después ejecutar otras líneas de código
   */

  async getAmountInput() {
    await this.updateComplete;
    const el = this.shadowRoot.getElementById('amountInput');
    el.value = 10;
  }

  propSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  // We use the dom reference to expose a public submit method API.
  submitForm() {
    return this._form.submit();
  }

}

customElements.define('first-updated', FirstUpdated);