import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

export class NotFoundPage extends LitElement {
  static styles = css`
    :host { display: block; }
    .wrap {
      max-width: 820px;
      margin: 24px auto;
      padding: 28px;
      display: flex;
      gap: 28px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
    }
    .text h1 {
      font-size: 2rem;
      margin: 0 0 12px 0;
    }
    .text p {
      margin: 0 0 18px 0;
      color: rgba(255,255,255,0.85);
    }
    img {
      width: 240px;
      height: auto;
      filter: drop-shadow(0 12px 24px rgba(0,0,0,0.45));
      border-radius: 12px;
      background: rgba(255,255,255,0.03);
      padding: 12px;
    }
    .actions button {
      background: linear-gradient(90deg,#06b6d4,#0ea5a4);
      color: white;
      border: none;
      padding: 10px 16px;
      border-radius: 10px;
      cursor: pointer;
      font-weight: 700;
      box-shadow: 0 8px 20px rgba(2,6,23,0.35);
    }
  `;

  render() {
    return html`
      <section class="wrap">
        <div class="text">
          <h1>404 — Página no encontrada</h1>
          <p>Lo sentimos, la ruta que intentas visitar no existe o fue movida.</p>
          <div class="actions">
            <button @click="${() => Router.go('/')}" aria-label="Volver al inicio">Volver al inicio</button>
          </div>
        </div>
        <img src="/src/assets/not-found.svg" alt="Ilustración de página no encontrada">
      </section>
    `;
  }
}

customElements.define('not-found', NotFoundPage);
