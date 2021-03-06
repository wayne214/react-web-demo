import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {Addition, Button, HeaderWrapper,
    Logo, Nav, NavItem, NavSearch,
    SearchInfo, SearchWrapper, SearchInfoTitle,
    SearchInfoSwitch, SearchInfoItem
} from "./styles";
import {searchFocus, searchBlur, getSearchTrendingList, mouseEnter, mouseLeave, changePage} from '../../actions/header.action'
import {Link} from "react-router-dom";
import {logout} from '../../actions/login.action';

class Header extends Component {

   getArrayList = () => {
       const {trendingList, mouseIn, focused, page, totalPage} = this.props;
       const newList = trendingList.toJS()
       const tempArray = []
       if(newList.length){
           for (let i = page * 10; i < (page + 1) * 10; i++) {
               tempArray.push(
                   <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
               )
           }
       }

        if(focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={this.props.handleMouseEnter}
                    onMouseLeave={this.props.handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={()=> this.props._changePage(page, totalPage, this.spinIcon)}
                        >
                            <span ref={(spin) => this.spinIcon = spin} className="iconfont spin">&#xe865;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {tempArray}
                    </div>
                </SearchInfo>
            )
        }else {
            return null
        }
    }


    render() {
        const {focused, isLogin} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>

                <Nav>
                    <NavItem className={'left active'}>首页</NavItem>
                    <NavItem className={'left'}>下载App</NavItem>
                    {
                        isLogin ?
                            <NavItem onClick={this.props._logout} className={'right'}>退出</NavItem> :
                            <Link to='/login'>
                                <NavItem className={'right'}>登录</NavItem>
                            </Link>
                    }
                    <NavItem className={'right'}>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames={'slide'}
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={this.props._handleInputFocus}
                                onBlur={this.props._handleInputBlur}
                            />
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe612;</span>
                        {this.getArrayList()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className={'writing'}>
                            <span className="iconfont">&#xe611;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className={'reg'}>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = ({header, login}) => {
    return {
        focused: header.get('focused'),
        trendingList: header.get('trendingList'),
        mouseIn: header.get('mouseIn'),
        page: header.get('page'),
        totalPage: header.get('totalPage'),
        isLogin: login.get('isLogin')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _handleInputFocus() {
            dispatch(searchFocus())
            dispatch(getSearchTrendingList())
        },
        _handleInputBlur() {
            dispatch(searchBlur())
        },
        handleMouseEnter(){
            dispatch(mouseEnter())
        },
        handleMouseLeave() {
            dispatch(mouseLeave())
        },
        _changePage(page, totalPage, spin){
            let originAngel = spin.style.transform.replace(/[^0-9]/ig, '')
            if(originAngel){
                originAngel = parseInt(originAngel, 10)
            } else {
                originAngel = 0
            }

            // console.log(spin, originAngel)

            spin.style.transform = 'rotate('+(originAngel + 360)+'deg)'

            if(page < totalPage) {
                dispatch(changePage(page + 1))
            }else {
                dispatch(changePage(1))
            }
        },
        _logout() {
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
