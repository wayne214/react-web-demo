import {fromJS} from 'immutable'

import {SEARCH_FOCUS, SEARCH_BLUR, SEARCH_TRENDING_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from '../action_types/header.type'

const initState = fromJS({
    focused: false,
    trendingList: [],
    page: 0,
    totalPage: 1,
    mouseIn: false,
})

const header = (state = initState, action) =>{
    switch (action.type) {
        case SEARCH_FOCUS:
            return state.set('focused', true)
        case SEARCH_BLUR:
            return state.set('focused', false)
        case SEARCH_TRENDING_LIST:
            // return state.set('trendingList', action.payload.data)
            //     .set('totalPage', action.payload.totalPage)
            return state.merge({
                trendingList: action.payload.data,
                totalPage: action.payload.totalPage
            })

        case MOUSE_ENTER:
            return state.set('mouseIn', true)
        case MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state;
    }
}

export default header
