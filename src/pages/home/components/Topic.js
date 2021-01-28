import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TopicItem, TopicWrapper} from "../styles";

class Topic extends Component{
    render() {
        const {list} = this.props;
        return(
            <TopicWrapper>
                {
                    list.map(item=>{
                        return(
                            <TopicItem>
                                <img
                                    alt={''}
                                    className={'topic-img'}
                                    src={item.get('imgUrl')}
                                />
                                {item.get('name')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = ({topic}) => {
    return {
        list: topic.get('topicList'),
    }
}
export default connect(mapStateToProps)(Topic);
