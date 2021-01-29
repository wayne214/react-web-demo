import React, {Component} from 'react';
import {connect} from "react-redux";
import {LoginWrapper, LoginBox, LoginInput, LoginButton} from "./styles";
import {withRouter} from 'react-router';
import {login} from '../../actions/login.action';
import {Redirect} from 'react-router-dom';

class Login extends Component{

    componentDidMount() {
        // 获取路由传递过来的参数
        const params = this.props.match.params;
        console.log('123', params)
    }

    render() {
        const {isLogin} = this.props;
        if(isLogin) {
            return <Redirect to='/' />
        }
        return(
            <LoginWrapper>
                <LoginBox>
                    <LoginInput placeholder={'账号'}/>
                    <LoginInput placeholder={'密码'}/>
                    <LoginButton onClick={this.props._login}>登录</LoginButton>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapState = ({login}) => {
    return{
        isLogin: login.get('isLogin')
    }
}

const mapDispatch = (dispatch) => ({
    _login() {
        dispatch(login())
    }
})

export default connect(mapState, mapDispatch)(withRouter(Login));
