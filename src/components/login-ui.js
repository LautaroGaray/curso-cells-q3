import { LitElement, html, css } from 'lit';
import { EventHelper } from '../helpers/eventHelper.js';

export class LoginUi extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static properties = {
        email:{ type: String },
        password:{ type: String }
    }

    constructor(){
        super();

        this.email = '';
        this.password = '';
    }

    handleSubmit(event){
        event.preventDefault();
        EventHelper._fireEvent(this, 'login-ui:submit', { email: this.email, password: this.password });
    }

    emailChange(event){
        this.email = event.target.value;
    }

    passwordChange(event){
        this.password = event.target.value;
    }

    firstUpdated(){
        const input = this.shadowRoot.querySelector('#email');
        if(input){
            input.focus();
        }
    }
    render() {
        return html`
        <div class='login-ui'>   
         <form @submit="${this.handleSubmit}">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" .value="${this.email}" @input="${this.emailChange}" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" .value="${this.password}" @input="${this.passwordChange}"  required>
            <button type="submit">Login</button>
    </form>
    </div>
        `;
    }
}
customElements.define('login-ui', LoginUi);
