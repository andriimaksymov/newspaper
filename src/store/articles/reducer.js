import * as TYPE from "./actionTypes";

const initialState = {
	list: null,
	totalCount: 0
}

export default function articlesReducer(state = initialState, { type, data }) {
	switch (type) {
		case TYPE.ARTICLES_RECEIVED:
			return {
				...state,
				list: data.results,
				totalCount: data.num_results,
			}
		default:
			return state;
	}
}