import React, {Component} from 'react';
import {connect} from "react-redux";
import {DetailContent, DetailWrapper, Header} from "./styles";
import {withRouter} from 'react-router';

class Detail extends Component{

    componentDidMount() {
        // 获取路由传递过来的参数
        const params = this.props.match.params;
        console.log('123', params)

    }

    render() {
        return(
            <DetailWrapper>
                <Header>关系再好，也不要跟人透露这三个隐私。</Header>
                <DetailContent>
                    <img src='https://upload-images.jianshu.io/upload_images/19061415-66ab1f0ffbf6e070.png?imageMogr2/auto-orient/strip|imageView2/2/w/700/format/webp'/>
                    <p>1，自己的家里的家务事。很多人遇到点事就爱跟朋友倾诉，说自己的爱人这也不好，那不好。说者无意，听者有心，他就会把你家的事告诉其他人，那时候他们都会说你的爱人是个窝囊废，到最后你这些破事，只会成为他们茶余饭后的笑柄。</p>
                    <p>2，自己曾经做过的那些后悔的事。过错或不堪是所有人都需要习惯的痛，也是人人必须藏在心里的秘密。当你把自己过去那些不堪的事，告诉你身边的朋友时，就等于给了他们日后往你伤口撒盐的机会。</p>
                    <p>3，自己托关系办成的那些私事。最傻的人才会用秘密和隐私换取跟朋友很铁的关系。你身边的那些人，确实希望你过得好，但他们绝对不希望你过得比他们好。这就是人性的真相。你可能不相信我说的话，但现实会教会你人性残酷的那一面。</p>
                </DetailContent>
            </DetailWrapper>
        )
    }
}

export default connect()(withRouter(Detail));
