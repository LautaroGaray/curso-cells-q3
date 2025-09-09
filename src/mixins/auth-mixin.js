export const Auth = {
  key: 'app_auth',
  login(username, password) {
    return new Promise((resolve, reject) => {
      const valid = (username === 'user@email.com' && password === 'Pass1234');
      if (valid) {
        const user = { username, token: 'token-' + Date.now() };
        localStorage.setItem(this.key, JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  },
  logout() {
    localStorage.removeItem(this.key);
  },
  getUser() {
    const s = localStorage.getItem(this.key);
    return s ? JSON.parse(s) : null;
  },
  isAuthenticated() {
    return !!this.getUser();
  }
};
