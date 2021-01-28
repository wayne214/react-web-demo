import React, {Component} from 'react';
import {BackTop, HomeLeft, HomeRight, HomeWrapper} from "./styles";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

class Home extends Component{
    _scrollTop = () => {
        window.scrollTo(0,0)
    }

    componentDidMount() {
        this.bindEvents();
    }

    bindEvents = () => {
        window.addEventListener('scroll', this._pageScroll)
    }

    _pageScroll = () => {
        console.log("滑动距离",document.documentElement.scrollTop)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._pageScroll)
    }

    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt={''} className={'banner-img'} src='https://static.oschina.net/uploads/space/2021/0118/232459_jWje_2720166.jpg'/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>

                <BackTop onClick={this._scrollTop}>
                    顶部
                </BackTop>
            </HomeWrapper>
        )
    }
}

export default Home;
