import { combineReducers } from "redux";

import commonReducer from "./common/reducer";
import articlesReducer from "./articles/reducer";

const rootReducer = combineReducers({
    common: commonReducer,
    articles: articlesReducer,
});

export default rootReducer;