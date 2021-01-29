import React, {Component} from 'react';
import {ListItem, ListItemInfo} from "../styles";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

class List extends Component{
    render() {
        const {articleList} = this.props;
        return(
            <div>
                {
                    articleList.map(item=>{
                        return(
                            // 路由传参
                            <Link to='/detail/100'>
                                <ListItem>
                                    <img
                                        alt={''}
                                        className='list-pic'
                                        src={item.get('imgUrl')} />
                                    <ListItemInfo>
                                        <h3 className={'title'}>{item.get('title')}</h3>
                                        <p className={'des'}>{item.get('des')}</p>
                                    </ListItemInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = ({topic}) => {
    return {
        articleList: topic.get('articleList'),
    }
}
export default connect(mapStateToProps)(List);

