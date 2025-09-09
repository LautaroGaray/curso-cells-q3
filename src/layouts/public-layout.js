import { LitElement, html, css } from 'lit';

export class PublicLayout extends LitElement {
  static styles = css`:host{display:block;padding:20px}`;
  
  render(){ return html`<slot></slot>`; }
}
customElements.define('public-layout', PublicLayout);
