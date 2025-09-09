import { LitElement, html, css } from 'lit';

export class AboutPage extends LitElement {
    static styles = [
        css`
            :host { display:block; }
        `
    ];

    render() {
        return html`<h1>About</h1>
        <p>This is a simple demo app showing routing with @vaadin/router and Lit.</p>`;
    }
}
customElements.define('about-page', AboutPage);
