/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/views/Home/Index.vue'),
  },
  // Contact
  {
    path: '/contact/:id',
    name: 'contact.index',
    component: () => import('@/views/Contact/Index.vue'),
  },

  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
