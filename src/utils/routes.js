const routes = {
	home: '/newspaper',
	articles: slug_name => `/newspaper/articles/${slug_name}`,
	categories: '/categories',
};

export default routes;