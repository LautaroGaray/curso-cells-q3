import { Router } from '@vaadin/router';

const outlet = document.getElementById('outlet') || document.body;
const router = new Router(outlet);

router.setRoutes([
  { path: '/', component: 'login-page', action: async () => {
      await import('./pages/login-page.js');
  }},
  { path: '/about', component: 'about-page', action: async () => {
      await import('./pages/about-page.js');
  }},
  { path: '/home', component: 'home-page', action: async () => {
      await import('./pages/home-page.js');
  }},
  // not found
  { path: '(.*)', component: 'not-found', action: async () => {
      await import('./pages/not-found.js');
  }},
]);
