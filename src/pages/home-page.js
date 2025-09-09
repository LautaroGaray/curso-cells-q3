import { LitElement, html, css } from 'lit';
import '../components/alert-component.js';
import '../layouts/auth-layout.js';
import { Auth } from '../mixins/auth-mixin.js';

export class HomePage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<auth-layout><h1>Home Page</h1>
        <p>Welcome ${Auth.getUser()?.username || 'invitado'}</p></auth-layout>`;
    }
}
customElements.define('home-page', HomePage);
