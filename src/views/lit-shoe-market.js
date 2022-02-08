import {LitElement, html, css} from 'lit-element';
import '../components/app-link';
import '../components/filter'
import  list from '../../assets/shoeList';


export class LitShoeMarket extends LitElement {
  static get styles() {
    return css`

    .container{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr;
      position: relative;
      width: calc(100%-25%);
     
      
    }
    .imagen{
      height: 200px;
      width: 200px;
    }
      ul{
        padding: 0;
      margin: 20px 0 50px 0;
      list-style-type: none;
     
      }  
      li {
        margin: 10px 0;
        font-size: 14px;
       
          border-bottom: 2px dotted $color-four;
        }
        .card {
          background: white;
          box-shadow: 0 0 20px rgba(0,0,0,0.4);
          border-radius: 5px;
          margin: 50px 20px 20px 20px;
          padding: 20px;
          text-align: center;
          color:black;
          float: left;
        }
        .card:hover{
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    border: none;
    outline: none;
    
    transition: 0.3s;
        }
        .price{
          color: blue;
          font-size: 20px;
        }
        .btn {
          display: block;
          background: grey;
          color: white;
          
          margin: 10px;
          border-radius: 5px;
          box-shadow: rgba(0,0,0,0.9);
          transition: all 200ms ease-in-out;
          text-decoration: none;
          
         
         
        }
        .btn:hover {
          background: #6d85b1;
        }
        .filtros{
          display: flex;
          
        }
        .arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin:20px;
  cursor: pointer;
  
}


.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
       
    `;
  }

  static get properties() {
    return {
      showFilter:{type:Boolean},
      shoeList:{type: Array},
    
      
    };
  }

  constructor() {
    super();
    
    
      this.shoeList=list;
     
      
    
  }
  //filtrado botones
  getByNew(){
    const aux= this.shadowRoot.getElementById('isNew');
    let shoeFilterN=[]

    this.shoeList.filter((shoe)=>{
      if(shoe.isNew===true){
        shoeFilterN.push(shoe)
      }
    });
    this.shoeList=[...shoeFilterN]
    console.log(shoeFilterN);
  }
  getByFeature(){
    const aux= this.shadowRoot.getElementById('feature');
    let shoeFilterF=[]

    this.shoeList.filter((shoe)=>{
      if(shoe.featured===true){
        shoeFilterF.push(shoe)
      }
    });
    this.shoeList=[...shoeFilterF]
    console.log(shoeFilterF);
  }
  getByComming(){
    const aux= this.shadowRoot.getElementById('upComing');
    let shoeFilterU=[]

    this.shoeList.filter((shoe)=>{
      if(shoe.upcoming===true){
        shoeFilterU.push(shoe)
      }
    });
    this.shoeList=[...shoeFilterU]
    console.log(shoeFilterU);

  }
//mal
  getAll(){
    const aux= this.shadowRoot.getElementById('todos');
    let shoeListAll= [];
    this.shoeList=[...shoeListAll]
   console.log(shoeListAll);

  }

  getByS(){
    const aux= this.shadowRoot.getElementById('s');
    let shoeFilterS=[]

    this.shoeList.filter((shoe)=>{
      if(shoe.size==="39"){
        shoeFilterS.push(shoe)
      }
    });
    this.shoeList=[...shoeFilterS]
    console.log(shoeFilterS);
  }
  getByM(){
    const aux= this.shadowRoot.getElementById('m');
    let shoeFilterM=[]

    this.shoeList.filter((shoe)=>{
      if(shoe.size==="40"){
        shoeFilterM.push(shoe)
      }
    });
    this.shoeList=[...shoeFilterM]
    console.log(shoeFilterM);
  }
  getByL(){
    const aux= this.shadowRoot.getElementById('l');
    let shoeFilterL=[]

    this.shoeList.filter((shoe)=>{
      if(shoe.size==="41"){
        shoeFilterL.push(shoe)
      }
    });
    this.shoeList=[...shoeFilterL]
    console.log(shoeFilterL);

  }
  getByXl(){
    const aux= this.shadowRoot.getElementById('xL');
    let shoeFilterXl=[]

    this.shoeList.filter((shoe)=>{
      if(shoe.size ==="42"){
        shoeFilterXl.push(shoe)
      }
    });
    this.shoeList=[...shoeFilterXl]
    console.log(shoeFilterXl);

  }
  //vista de carro
  handleCart(){
    this.dispatchEvent(new CustomEvent('cart'))
    console.log('cart');
  }
 //boton lista
/*   seeList(){
    return console.log(this.shoeList);
  } */

  //mandar filtros
 
//filtro conbinado select
 handleFilterSelect(){
  this.dispatchEvent(new CustomEvent('select'))
  console.log('select');
 }


 //////
  render() {
    return html`
  <i class="arrow left" @click=${() => this.showFilter = !this.showFilter}></i>
  ${this.showFilter ? html`
 <lit-filter  @filterN=${this.getByNew} 
          @filterF=${this.getByFeature} 
          
          @filterU=${this.getByComming} 
          @filter-s=${this.getByS}
          @filter-m=${this.getByM}
          @filter-l=${this.getByL}
          @filter-xl=${this.getByXl}
         ></lit-filter>` : ''}
 <div class="container">
<!-- filtrado botones -->
  <!--  <button @click="${() =>this.seeList()}">boton</button> -->

  
 <!--  filtrado select -->
<!--   <div >
   <select id="search" value="search" @change="${this.handleFilterSelect}">
   
    <option value="isnew">New</option>
    <option value="feature">Feature</option>
    <option value="upcoming">Coming</option>
  </select>
</div> -->  




     <div class="container">
    ${this.shoeList.map(shoe=> {
        return html`
        <app-link href="detail/${shoe._id}">
  
<div class="card">
        <ul >
          <div class="item">
            <strong><li>${shoe.name}</li></strong>
          
            <li><img class="imagen" src="${shoe.picture}" ></li>
            <li>${shoe.marker}</li>
              <strong><li class="price">${shoe.price}$</li></strong>
          </div>
          
        </ul> </app-link> <app-link href="cart"><button @click=${this.handleCart}>+</button></app-link>
    </div>
 
   </div>`})}  
   `;
   
  }

}

window.customElements.define('lit-shoe-market', LitShoeMarket);
