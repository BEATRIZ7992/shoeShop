import {LitElement, html, css} from 'lit-element';

import  list from '../../assets/shoeList';



export class LitShoeReview extends LitElement {
  static get styles() {
    return css`

    .container{
      display:flex;
      flex-direction: column;
      align-items: center;
    }
    .card {
      background: white;
      width:800px;
      
      box-shadow: 0 0 20px rgba(0,0,0,0.4);
      border-radius: 5px;
      margin: 50px 20px 20px 20px;
      padding: 20px;
      text-align: justify;
      color:black;
      float: left;
    }
    .card:hover{
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
border: none;
outline: none;

transition: 0.3s;
    }

    ul{
      padding: 0;
    margin: 20px 0 50px 0;
    list-style-type: none;
   
    } 
    


    
    `;
  }

  static get properties() {
    return {
        review:{type:Array}
        
    };
  }

  constructor() {
    super();
    
      this.review=list;
 
  }
  
  



 
  
  render() {
    return html`


          <div class="container">
         
        
          ${this.review[0].reviews.map(shoe=> {
        return html`
        <ul >
          <div class="item">
             <div class="card">
            <li> ⭐${shoe.rate} </li>
           <strong><li>Name: ${shoe.name}</li></strong>
          
            
      
              <li>${shoe.comment}</li>
          </div>
          </div>
        </ul>

        `})}  
        
       
      
      
          </div>
 
   




   
    `;
  }

}

window.customElements.define('lit-shoe-review', LitShoeReview);
