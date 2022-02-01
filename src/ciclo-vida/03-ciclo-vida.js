import { LitElement, html } from 'lit-element';

class CicloVida extends LitElement {
  static get properties() {
    return {
      myArr: { type: Array }
    };
  }

  constructor() {
    super();
    this.myArr = ['foo', 'bar'];
  }

  /**
  *
  * Se llama a connectedCallback cuando el elemento se inserta en el DOM.
  */
  connectedCallback() {
    super.connectedCallback();
    console.log('connected!');
    console.log(this.shadowRoot.querySelector('ul'));
  }

  /**
   * Se implementa para controlar si la actualización y el renderizado deben ocurrir cuando
   * los valores de propiedad cambian o se llama a requestUpdate ().
   */
  shouldUpdate(changedProperties) {
    console.log('should update!');
    console.log(this.shadowRoot.querySelector('ul'));

    // changedProperties.forEach((oldValue, propName) => {
    //   console.log(`${propName} changed. oldValue: ${oldValue}`);
    // });

    // return changedProperties.has('myArr');

    return true;
  }

  /**
  *
  * Se invoca después de que el DOM del elemento se haya actualizado por primera vez, inmediatamente antes que updated()
  * se invoque. Este método puede resultar útil para consultar dom. Establecer propiedades en el interior de
  * este método activará la actualización del elemento.
  */
  firstUpdated() {
    console.log('first updated!');
    console.log(this.shadowRoot.querySelector('ul'));
  }

  /**
  *
  * Se implementa para realizar tareas posteriores a la actualización a través de DOM API, por ejemplo, enfocando(focus) un elemento.
  * Si actualizamos o 'seteamos' propiedades dentro de este método no activará 'trigger' otro update.
  */
  updated(changedProps) {
    super.updated(changedProps);
    console.log('updated!');
    console.log(this.shadowRoot.querySelector('ul'));

    // if (changedProps.has('myArr')) {
    //   console.log('cambio en arr');
    // }
  }

  /**
  *
  * Se invoca cada vez que el custom element se desconecta del DOM.
  * Es ùtil para ejecutar código de limpieza.
  */
  disconnectedCallback() {
    console.log('disconnected!');
    console.log(this.shadowRoot.querySelector('ul'));
  }

  _addItem() {
    this.myArr = [...this.myArr, 'baz'];
  }

  render() {
    let { myArr } = this;

    return html`
      <p>abre la consola para ver cuando ocurren los métodos de ciclo de vida</p>
      <!-- Agregar un elemento hará que myArr cambie, el cambio de propiedad se recogerá y activará una actualización -->
      <button @click=${this._addItem}>añade un item</button>
      <ul>
        ${myArr.map(item => html`
          <li>${item}</li>
        `)}
      </ul>
    `;
  }
}

customElements.define('ciclo-vida', CicloVida);