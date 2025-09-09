import { LitElement, html, css } from 'lit';
import { Auth } from '../mixins/auth-mixin.js';
import { EventHelper } from '../helpers/eventHelper.js';

export class LoginComponent extends LitElement {
  static styles = css`
    form { display:flex; flex-direction:column; gap:8px; width:300px }
    input { padding:8px }
    button { padding:8px }
  `;

  render() {
    return html`
      <form @submit=${this._onSubmit}>
        <input name="username" placeholder="Usuario" />
        <input name="password" type="password" placeholder="Contraseña" />
        <button type="submit">Login</button>
      </form>
    `;
  }

  _onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    Auth.login(username, password).then(user => {
      EventHelper._fireEvent(this, 'login-success', user);
    }).catch(err => {
      EventHelper._fireEvent(this, 'login-error', { message: err.message });
    });
  }
}
customElements.define('login-component', LoginComponent);
