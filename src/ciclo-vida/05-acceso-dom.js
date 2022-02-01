import { LitElement, html } from 'lit-element';

class AccesoDom extends LitElement {

  static get properties() {
    return {
      users: { type: Array },
    };
  }

  constructor() {
    super();

    this.users = [ 'steve' ];
  }

  // Para acceder a los nodos dom de forma imperativa, podemos utilizar 'query selectors' en la instancia del elemento.
  // LitElement usa shadow dom, por lo que el selector debe realizarse en el shadowroot del elemento.
  // Debido al shadow dom, los selectores tienen como alcance(scope) solo el dom de esta instancia de elemento.
  //
  // Tenga en cuenta que el primer renderizado del elemento es asincrónico, por lo que los nodos dom solicitados pueden
  // no estará disponible al ejecutar esta función.
  //
  // Como en el ejemplo de ciclo de vida
  get usernameInput() {
    return this.shadowRoot.getElementById('usernameInput');
  }

  get username() {
    // Usa el getter y se obtiene la propiedad de valor del elemento de entrada
    return this.usernameInput.value;
  }

  render() {
    return html`
      <input id="usernameInput" name="username">
      <button @click="${() => this._addUsername()}">Agrega usuario</button>
      <ul>
        ${this.users.map(user => html`
          <li>${user}</li>
        `)}
      </ul>
    `;
  }

  _addUsername() {
    this.users = [...this.users, this.username];

    // Usa el getter de entrada y borra el valor
    this.usernameInput.value = '';
  }
}

customElements.define('acceso-dom', AccesoDom);