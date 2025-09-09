import { LitElement, html } from 'lit';
import { EventHelper } from '../helpers/eventHelper.js';

export class LoginUi extends LitElement {
    createRenderRoot(){ return this; }

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
        const root = this.renderRoot || this;
        const input = root.querySelector('#email');
        if(input){
            input.focus();
        }
    }
    render() {
        return html`
        <div class='login-ui'>   
         <form class="p-4 bg-white rounded shadow-sm d-flex flex-column gap-3" @submit="${this.handleSubmit}">
            <div class="mb-2">
              <label for="email" class="form-label">Email:</label>
              <input type="email" id="email" name="email" class="form-control" .value="${this.email}" @input="${this.emailChange}" required>
            </div>
            <div class="mb-2">
              <label for="password" class="form-label">Password:</label>
              <input type="password" id="password" name="password" class="form-control" .value="${this.password}" @input="${this.passwordChange}"  required>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
    </form>
    </div>
        `;
    }
}
customElements.define('login-ui', LoginUi);
