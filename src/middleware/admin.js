export default function admin({ next, router }) {
  let user = localStorage.getItem('user');
  let is_admin = user['is_admin'];
  if (!is_admin) {
    return router.push('/posts');
  }

  return next();
}
