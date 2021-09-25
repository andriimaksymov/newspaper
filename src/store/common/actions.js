import * as TYPE from "./actionTypes";

export const fetchingStart = () => ({ type: TYPE.FETCHING_START });
export const fetchingFinished = () => ({ type: TYPE.FETCHING_FINISHED });
export const inProgressStart = () => ({ type: TYPE.IN_PROGRESS_START });
export const inProgressFinished = () => ({ type: TYPE.IN_PROGRESS_FINISHED });