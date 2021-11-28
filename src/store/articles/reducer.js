import * as TYPE from "./actionTypes";

const initialState = {
	articles: {
		list: null,
		count: 0
	},
	sections: {
		list: null,
		count: 0
	},
	top_stories: {
		list: null,
		count: 0
	},
	most_popular: {
		list: null,
		count: 0
	}
}

export default function articlesReducer(state = initialState, { type, data }) {
	switch (type) {
		case TYPE.ARTICLES_RECEIVED:
			return {
				...state,
				articles: {
					...state.articles,
					[data.type]: {
						...state.articles[data.type],
						list: data.results,
						count: data.num_results,
					}
				},
			}
		case TYPE.ARTICLES_CLEAR:
			return {
				...state,
				articles: {
					list: null,
					count: 0,
				},
			}
		case TYPE.ARTICLES_SECTIONS_RECEIVED:
			return {
				...state,
				sections: {
					list: data.results,
					count: data.num_results,
				}
			}
		case TYPE.ARTICLES_SECTIONS_CLEAR:
			return {
				...state,
				sections: {
					list: null,
				}
			}
		case TYPE.TOP_STORIES_RECEIVED:
			return {
				...state,
				top_stories: {
					list: data.results,
					count: data.num_results,
				}
			}
		case TYPE.TOP_STORIES_CLEAR:
			return {
				...state,
				top_stories: {
					list: null,
					count: 0,
				}
			}
		case TYPE.MOST_POPULAR_RECEIVED:
			return {
				...state,
				most_popular: {
					list: data.results,
					count: data.num_results,
				}
			}
		case TYPE.MOST_POPULAR_CLEAR:
			return {
				...state,
				most_popular: {
					list: null,
					count: 0,
				}
			}
		default:
			return state;
	}
}