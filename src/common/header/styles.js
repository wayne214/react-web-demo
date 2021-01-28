import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  box-sizing: border-box;
  padding-right: 70px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  
  &.right {
    float: right;
    color: #969696;
  }
  
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .slide-enter {
    transition: all .2s ease-out;
  }
  .slide-enter-active {
    width: 260px;
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .zoom {
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    //background: green;
    text-align: center;
    &.focused {
      background: #5e5e5e;
      color: #fff;
    }
  }
`
export const SearchInfo = styled.div`
  width: 240px;
  position: absolute;
  padding: 0 20px;
  top: 56px;
  left: 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`
export const SearchInfoTitle = styled.div`
  line-height: 20px;
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    float: left;
    display: block;
    font-size: 12px;
    margin-right: 3px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  border: none;
  outline: none;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999
  }
  
  &.focused {
    width: 260px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  border-radius: 19px;
  padding: 0 20px;
  margin-top: 9px;
  line-height: 38px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`
