import { LitElement, html, css } from 'lit';

export class AlertComponent extends LitElement {
  static properties = { 
    message: { type: String } 
};
  static styles = css`p { color: red }`;

  constructor(){ 
    super(); this.message = '';
 }

  render(){ 
    return html`<p ?hidden=${!this.message}>${this.message}</p>`; }
}

customElements.define('alert-component', AlertComponent);
