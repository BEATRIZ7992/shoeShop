import {LitElement, html, css} from 'lit-element';

import '../components/app-link';
import  list from '../../assets/shoeList';



export class LitShoeDetail extends LitElement {
  static get styles() {
    return css`
 
    `;
  }

  static get properties() {
    return {
     
        shoeList:{type: Array}
    };
  }

  constructor() {
    super();
    
    this.shoeList= list;
      
     
      
    
  }
  

 
  
  render() {
    return html`

<app-link href="detail/${this.shoeList._id}">
<div>

           <p> ${this.shoeList.name}</p>
           <img src="${this.shoeList.picture}">
            
</div>

</app-link>

   
    `;
  }

}

window.customElements.define('lit-shoe-detail', LitShoeDetail);
