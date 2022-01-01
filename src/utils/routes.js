const routes = {
	home: '/newspaper',
	search: params => `/newspaper/search${params}`,
	articles: slug_name => `/newspaper/articles/${slug_name}`,
	categories: '/newspaper/categories',
};

export default routes;