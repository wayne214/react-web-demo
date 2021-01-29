import axios from "axios";
import {LOGIN, LOGOUT} from '../action_types/login.type'


export const logout = () => ({
    type: LOGOUT,
    value: false
})

export const login = () => dispatch => {
    return axios.get('api/login.json')
        .then(res=>{
            dispatch({
                type: LOGIN
            })
        })
        .catch(err=>{
            console.log(err)
        })
}
