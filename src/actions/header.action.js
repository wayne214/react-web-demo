import axios from "axios";
import {fromJS} from 'immutable';
import {SEARCH_BLUR, SEARCH_FOCUS, SEARCH_TRENDING_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from '../action_types/header.type'
export const searchFocus = () => ({
    type: SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page: page
})

export const getSearchTrendingList = () => dispatch => {
    return axios.get('api/headerList.json')
        .then(res=>{
            console.log('--res--', res)
            const result = res.data;
            dispatch({type: SEARCH_TRENDING_LIST,
                payload: {data: fromJS(result.data),
                    totalPage: Math.ceil(result.data.length / 10)}})
        })
        .catch(err=>{
            console.log(err)
        })
}
