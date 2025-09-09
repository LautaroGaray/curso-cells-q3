import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { Auth } from '../mixins/auth-mixin.js';

export class MainNav extends LitElement {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
    this._onPop = this._onPop.bind(this);
  }

  render() {
    if (location.pathname === '/login') return html``;
    const authenticated = Auth.isAuthenticated();
    return html`
      <header>
        <div class="container">
          <a class="brand" href="/">BBVA Lit</a>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            ${authenticated ? html`<a href="#" @click=${this._onLogout}>Logout</a>` : html`<a href="/login">Login</a>`}
          </nav>
        </div>
      </header>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('popstate', this._onPop);
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this._onPop);
    this.shadowRoot.removeEventListener('click', this._onClick);
    super.disconnectedCallback();
  }

  firstUpdated() {
    this.shadowRoot.addEventListener('click', this._onClick);
  }

  _onPop() {
    this.requestUpdate();
  }

  _onClick(e) {
    const path = e.composedPath();
    const anchor = path.find(n => n.tagName === 'A' && n.href);
    if (!anchor) return;
    const url = new URL(anchor.href);
    if (url.origin === location.origin) {
      e.preventDefault();
      Router.go(url.pathname + url.search + url.hash);
    }
  }

  _onLogout(e) {
    e.preventDefault();
    Auth.logout();
    Router.go('/login');
    this.requestUpdate();
  }
}

customElements.define('main-nav', MainNav);
