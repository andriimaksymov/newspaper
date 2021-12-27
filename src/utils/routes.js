const routes = {
	home: '/newspaper',
	search: '/newspaper/search',
	articles: slug_name => `/newspaper/articles/${slug_name}`,
	categories: '/newspaper/categories',
};

export default routes;