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
}

export default function articlesReducer(state = initialState, { type, data }) {
	switch (type) {
		case TYPE.ARTICLES_RECEIVED:
			return {
				...state,
				articles: {
					list: data.results,
					count: data.num_results,
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
			console.log(data)
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
					count: 0,
				}
			}
		default:
			return state;
	}
}