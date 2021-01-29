import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import {Redirect} from 'react-router-dom';

class Write extends Component{

    render() {
        const {isLogin} = this.props;
        if(isLogin) {
            return <div>写文章页面</div>
        }
        return <Redirect to='/login'/>
    }
}

const mapState = ({login}) => {
    return{
        isLogin: login.get('isLogin')
    }
}


export default connect(mapState)(withRouter(Write));
