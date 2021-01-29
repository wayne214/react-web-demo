import {fromJS} from 'immutable'
import {LOGIN, LOGOUT} from "../action_types/login.type";

const initState = fromJS({
    isLogin: false
})

const login = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return state.set('isLogin', true)
        case LOGOUT:
            return state.set('isLogin', false)
        default:
            return state;
    }
}

export default login;
