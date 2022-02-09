import { LitElement, html, css } from "lit-element";
import './app-link' ;
import  list from '../../assets/shoeList';



export class Filter  extends LitElement {
  static get properties() {
    return {
        shoeList:{type:Array}
      
    };
  }

  static get styles() {
    return css`
    .sidebar {
        position: relative;
        margin:0;
        width: 20%;
        min-height:2000px;
        background: #312450;
        font-size: 15px;
        color:white;
        float:left;
        transition: all 0.3s ease;
        
      }
      .new {
          display:flex;
        line-height: 5em;
        
        color: rgba(#FFF, 0.35);
        display: block;
        transition: all ease-out 300ms;
      }
      
      &.active .new {
        color: white;
      }
      
      &:not(.active)::after {
        opacity: 0.2;
      }
      
      &:not(.active):hover .new {
        color: rgba(#FFF, 0.75);
      }
      
      .filtros{
          padding:10px;
          display:flex;
          align-items: center;
          flex-direction: column;

      }
   
     
    `;
  }

  constructor() {
    super();
    this.shoeList= list;
    
  }

  //filtro new
  handleFilterN(){
    this.dispatchEvent(new CustomEvent('filterN'))
    console.log('filterN');
   }
   handleFilterF(){
    this.dispatchEvent(new CustomEvent('filterF'))
    console.log('filterF');
   }
   handleFilterU(){
    this.dispatchEvent(new CustomEvent('filterU'))
    console.log('filterU');
   }
   handleFilterA(){
    this.dispatchEvent(new CustomEvent('filterA'))
    console.log('filterA');
   }


   //filtro color
   handleFilterSizeS(){
    this.dispatchEvent(new CustomEvent('filter-s'))
    console.log('filterS');
   }
   handleFilterSizeM(){
    this.dispatchEvent(new CustomEvent('filter-m'))
    console.log('filterM');
   }
   handleFilterSizeL(){
    this.dispatchEvent(new CustomEvent('filter-l'))
    console.log('filterL');
   }
   handleFilterSizeXl(){
    this.dispatchEvent(new CustomEvent('filter-xl'))
    console.log('filterXl');
   }

  

  render() {
    return html`
    <aside class="sidebar">
      <div class="filtros"><strong><h1>Filtrar por:</h1></strong>
      
    <div class="new"> <strong><p>New:</p></strong>
  <label><input type="checkbox" class="" id="isNew"   @click="${() =>this.handleFilterN()}">New</label>
  <label><input type="checkbox" class="" id="feature" @click="${() =>this.handleFilterF()}">Feature</label>
  <label><input type="checkbox" class="" id="upComing" @click="${() =>this.handleFilterU()}">Comming</label>
  <label><input type="checkbox" class="" id="todos" @click="${() =>this.handleFilterA()}">All</label>
  
 </div>

 <div class="new"><strong><p>Size:</p></strong>
  <label><input type="checkbox" class="" id="s"   @click="${() =>this.handleFilterSizeS()}">39</label>
  <label><input type="checkbox" class="" id="m" @click="${() =>this.handleFilterSizeM()}">40</label>
  <label><input type="checkbox" class="" id="l" @click="${() =>this.handleFilterSizeL()}">41</label>
  <label><input type="checkbox" class="" id="xl" @click="${() =>this.handleFilterSizeXl()}">42</label>
</div>
  </div>
     </aside>
    `;
  }


}

customElements.define("lit-filter", Filter);
