import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
export const TopicWrapper = styled.div`
  margin-left: -18px;
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  .topic-img {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    display: block;
    float: right;
    height: 100px;
    width: 125px;
    border-radius: 10px;
  }
`

export const ListItemInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    color: #333;
    font-weight: bold;
  }
  .des {
    margin-top: 10px;
    font-size: 13px;
    color: #777;
  }
`

export const RecommendWrapper = styled.div`
  width: 280px;
  margin: 20px 0;
  .recommend-pic {
    width: 280px;
    height: 50px;
    border-radius: 4px;
    display: block;
  }
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 10px;
  background: url("${(props)=> props.imgUrl}");
  background-size: contain;
`

export const BackTop = styled.div`
  width: 60px;
  height: 60px;
  line-height: 60px;
  position: fixed;
  right: 100px;
  bottom: 100px;
  border-radius: 3px;
  border: 1px solid #dcdcdc;
  text-align: center;
`

export const WriterItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  .writer-pic {
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  
`
export const WriterInfo = styled.div`
  width: 200px;
  float: left;
  margin-top: 5px;
  margin-left: 10px;
  .name {
    line-height: 20px;
    font-size: 15px;
    color: #333;
  }
  .content {
    font-size: 13px;
    color: #777;
  }
`
