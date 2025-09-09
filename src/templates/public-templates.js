import { LitElement, html, css } from 'lit';

export class PublicTemplates extends LitElement {
    static styles = [
        css`
            :host {
               display:flex;
               justify-content:center;
            }
            .main{
              
            }
           
        `
    ];

    render() {
        return html
        `<main class="main">
            <slot></slot>
        </main>`;
    }
}
customElements.define('public-template', PublicTemplates);
