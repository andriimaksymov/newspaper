const routes = {
  home: '/',
  search: '/search',
  articles: slug_name => `/articles/${slug_name}`,
  articleView: id => '/article/' + id,
  categories: '/categories',
};

export default routes;
