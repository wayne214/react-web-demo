import {combineReducers} from 'redux';

import header from "../reducers/header.reducer";
import topic from "../reducers/topic.reducer";
import login from "../reducers/login.reducer";

const rootReducer = combineReducers({
    header,
    topic,
    login,
})

export default rootReducer;
