import { LitElement, html, css } from 'lit';
import { Auth } from '../mixins/auth-mixin.js';
import { Router } from '@vaadin/router';
export class AuthLayout extends LitElement {
  static styles = css`header{display:flex;justify-content:space-between;align-items:center;padding:8px;background:#eee}main{padding:16px}`;

  render(){
     return html`<header><div>App</div><div><button @click=${this._logout}>Logout</button></div></header><main><slot></slot></main>`;
  }

  _logout(){ Auth.logout(); Router.go('/login'); }
  
  connectedCallback(){
     super.connectedCallback();
      if(!Auth.isAuthenticated()){
         Router.go('/login');
      }
   }
}
customElements.define('auth-layout', AuthLayout);
