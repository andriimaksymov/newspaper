const routes = {
  home: '/',
  articleView: id => '/article/' + id,
  articles: slug_name => `/articles/${slug_name}`,
  books: '/books',
  categories: '/categories',
  search: '/search',
};

export default routes;
