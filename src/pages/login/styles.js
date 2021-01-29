import styled from 'styled-components';

export const LoginWrapper = styled.div`
 z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`

export const LoginBox = styled.div`
  width: 400px;
  height: 200px;
  background: #fff;
  margin: 200px auto;
  padding-top: 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const LoginInput = styled.input`
  width: 200px;
  height: 38px;
  line-height: 38px;
  display: block;
  margin: 10px auto;
  padding: 0 10px;
`

export const LoginButton = styled.div`
  width: 200px;
  height: 38px;
  line-height: 38px;
  margin: 20px auto;
  background: dodgerblue;
  text-align: center;
  border-radius: 19px;
`
