import { LitElement, html, css } from 'lit';
import { EventHelper } from '../helpers/eventHelper.js';

export class LoginDm extends LitElement {
   
   constructor() {
    super();
        console.log("LoginDM constructor");
   }

   login(email,password){
      console.log("LoginDM login method");      

      //Simulate a longin request     
    setTimeout(() => {
           console.log('loginSuccess', {email})
      }, 1000);
    
      if(email === 'admin@gmail.com' && password === 'admin'){
          EventHelper._fireEvent(this, 'login-dm:login-success', {role:'admin'});
      }else{
          EventHelper._fireEvent(this, 'login-dm:login-error', {message: 'Invalid credentials'});
      }
   }
}
customElements.define('login-dm', LoginDm);
