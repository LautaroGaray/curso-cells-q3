import { LitElement, html, css } from 'lit';

export class AlertComponent extends LitElement {
  static properties = { 
    message: { type: String },
    open: { type: Boolean }
  };
  static styles = css`
    :host{position:fixed;left:0;top:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}
    .backdrop{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,0.5);}
    .modal{background:#fff;padding:20px;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,0.2);min-width:320px}
    .modal p{margin:0 0 12px}
    .actions{display:flex;justify-content:flex-end}
    button{padding:8px 12px;border:0;background:#0078d4;color:#fff;border-radius:6px;cursor:pointer}
    :host([hidden]){display:none}
  `;

  constructor(){ 
    super(); 
    this.message=''; 
    this.open=false; 
 }

  updated(){ this.toggleVisibility(); }

  toggleVisibility(){ 
    this.open = !!this.message; 
    if(this.open){ 
      this.removeAttribute('hidden'); 
    } else { 
      this.setAttribute('hidden',''); 
    } 
 }

  render(){
    return html`
      ${this.open ? html`
        <div class="backdrop" @click=${()=>{this.message='';}}></div>
        <div class="modal" role="dialog" aria-modal="true">
          <p>${this.message}</p>
          <div class="actions">
            <button @click=${()=>{this.message='';}}>Close</button>
          </div>
        </div>` : html``}
    `; 
 }
}

customElements.define('alert-component', AlertComponent);
