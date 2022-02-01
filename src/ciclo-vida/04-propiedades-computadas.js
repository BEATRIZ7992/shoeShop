import { LitElement, html } from 'lit-element';

class PropiedadesComputadas extends LitElement {

  static get properties() {
    return {
      itemsA: { type: Array },
      itemsB: { type: Array },
      amountA: { type: Number },
      amountB: { type: Number },
    };
  }

  constructor() {
    super();

    this.itemsA = ['hola', 'mundo'];
    this.itemsB = ['foo', 'bar'];
    this.amountA = 1;
    this.amountB = 2;
  }

  // Si está exponiendo una propiedad pública que se calcula en función de dos propiedades, puede
  // simplemente crea un getter que combine los dos.
  get totalAmount() {
    return this.amountA + this.amountB;
  }

  render() {

    // Con LitElement, podemos simplemente calcular las propiedades combinadas dentro
    // de la función render
    //
    // Hay que recordar que todo es simplemente javascript por lo cual podemos usar el método que más convenga.
    const items = this._computeItems(this.itemsA, this.itemsB);

    return html`
      <div>Los mensajes computados son: [${items.join(', ')}]</div>
      <!-- Para propiedades calculadas simples, se puedem calcular en línea -->
      <div>El monto computado es: [${this.amountA + this.amountB}]</div>
    `;
  }

  _computeItems(a, b) {
    return [...a, ...b];
  }

}

customElements.define('propiedades-computadas', PropiedadesComputadas);