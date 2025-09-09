import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

import '../templates/public-templates';
import '../components/login-ui';
import '../components/login-dm'
import '../components/alert-component.js';

export class LoginPage extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                width:100%;
                flex-direction: column;
                align-items: center;
            }

        `
    ];

    static properties = {
        alertMessage: { type: String }
    };

    constructor(){
        super();
        this.alertMessage = '';
    }

    handleSubmit(event){
        const {detail} = event;
        console.log('Login submit event', detail);
        const loginDm = this.shadowRoot.querySelector('login-dm');
        if(loginDm){
            loginDm.login(detail.email, detail.password);
        }
    }

    handleLoginError(event){
        const {detail} = event;
        this.alertMessage = detail?.message || 'Error de autenticación';
        console.error('Login error', detail);
    }

    handleLoginSuccess(event){
        const {detail} = event;
        this.alertMessage = '';
        console.log('Login success', detail.role);
        Router.go('/');
    }

    render() {
        return html`<public-template>
            <h1>Login Page</h1>
            <p>Please enter your credentials.</p>
            <alert-component .message=${this.alertMessage}></alert-component>
            <login-ui @login-ui:submit=${this.handleSubmit}></login-ui>
            <login-dm @login-dm:login-success="${this.handleLoginSuccess}"
                       @login-dm:login-error="${this.handleLoginError}">
            </login-dm>
       </public-template>`;
    }
}
customElements.define('login-page', LoginPage);
