import { LitElement, html, css } from 'lit';
import { Auth } from '../mixins/auth-mixin.js';
import { Router } from '@vaadin/router';
export class AuthLayout extends LitElement {
  static styles = css`header{
   display:flex;
   justify-content:space-evenly;
   align-items:center;
   background:#0005f5;
   width: 100vw;   
   padding: 1px;

   }
   main{padding:16px}
   `;

  render(){
     return html`<header><div>App</div><div><button @click=${this._logout}>Logout</button></div></header><main><slot></slot></main>`;
  }

  _logout(){ Auth.logout(); Router.go('/'); }
  
  connectedCallback(){
     super.connectedCallback();
      if(!Auth.isAuthenticated()){
         Router.go('/login');
      }
   }
}
customElements.define('auth-layout', AuthLayout);
