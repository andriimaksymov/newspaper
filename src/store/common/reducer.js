import * as TYPE from "./actionTypes";

const initialState = {
  fetching: false,
  inProgress: false,
};

export default function commonReducer(state = initialState, { type }) {
  switch (type) {
    case TYPE.FETCHING_START:
      return { ...state, fetching: true };
    case TYPE.FETCHING_FINISHED:
      return { ...state, fetching: false };

    case TYPE.IN_PROGRESS_START:
      return { ...state, inProgress: true };
    case TYPE.IN_PROGRESS_FINISHED:
      return { ...state, inProgress: false };

    default:
      return state;
  }
}
