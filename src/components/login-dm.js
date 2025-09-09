import { LitElement, html, css } from 'lit';
import { EventHelper } from '../helpers/eventHelper.js';
import { Auth } from '../mixins/auth-mixin.js';

export class LoginDm extends LitElement {
   
   constructor() {
    super();
        console.log("LoginDM constructor");
   }

   login(email,password){
      console.log("LoginDM login method");

      Auth.login(email, password).then(user => {
          EventHelper._fireEvent(this, 'login-dm:login-success', user);
      }).catch(err => {
          EventHelper._fireEvent(this, 'login-dm:login-error', {message: err.message});
      });
   }
}
customElements.define('login-dm', LoginDm);
