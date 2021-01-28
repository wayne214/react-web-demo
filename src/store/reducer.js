import {combineReducers} from 'redux';

import header from "../reducers/header.reducer";
import topic from "../reducers/topic.reducer";

const rootReducer = combineReducers({
    header,
    topic,
})

export default rootReducer;
