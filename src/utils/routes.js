const routes = {
	home: '/newspaper',
	search: '/search',
	articles: slug_name => `/newspaper/articles/${slug_name}`,
	categories: '/categories',
};

export default routes;