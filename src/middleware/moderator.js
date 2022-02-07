export default function moderator({ next, router }) {
  let user = localStorage.getItem('user');
  let is_moderator = user['is_moderator'];
  if (!is_moderator ) {
    return router.push('/posts');
  }

  return next();
}
