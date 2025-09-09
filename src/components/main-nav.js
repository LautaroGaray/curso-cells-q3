import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

export class MainNav extends LitElement {
  static styles = css`
    :host { display: block; }
    header {
      position: fixed;
      inset: 0 0 auto 0;
      height: 64px;
      display: flex;
      align-items: center;
      backdrop-filter: blur(6px);
      background: linear-gradient(90deg, rgba(6,182,212,0.95), rgba(14,165,164,0.95));
      color: white;
      box-shadow: 0 6px 18px rgba(2,6,23,0.45);
      z-index: 1000;
    }

    .container {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand {
      font-weight: 700;
      letter-spacing: 0.4px;
      color: white;
      text-decoration: none;
      font-size: 1.05rem;
    }

    nav {
      display: flex;
      gap: 18px;
      align-items: center;
    }

    a {
      color: rgba(255,255,255,0.95);
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 8px;
      transition: transform 160ms ease, background-color 160ms ease, box-shadow 160ms ease;
      font-weight: 600;
      font-size: 0.95rem;
    }

    a:hover {
      transform: translateY(-2px);
      background: rgba(255,255,255,0.06);
      box-shadow: 0 6px 14px rgba(2,6,23,0.25);
    }

    @media (max-width: 600px) {
      nav { gap: 8px; }
      .brand { font-size: 0.95rem; }
    }
  `;

  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  render() {
    return html`
      <header>
        <div class="container">
          <a class="brand" href="/">BBVA Lit</a>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/login">Login</a>
          </nav>
        </div>
      </header>
    `;
  }

  firstUpdated() {
    this.shadowRoot.addEventListener('click', this._onClick);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener('click', this._onClick);
    super.disconnectedCallback();
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
}

customElements.define('main-nav', MainNav);
