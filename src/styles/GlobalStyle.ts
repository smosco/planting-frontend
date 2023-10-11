import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}

  /* 여기에 추가적인 전역 스타일을 설정할 수 있습니다 */
  body {
    font-family: Arial, sans-serif;
    line-height: 1.5;
  }

  *{
    box-sizing: border-box;
  }

  input{
    border: none;
    font-size: inherit;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: inherit;
  }

  ul,li{
    list-style: none;
  }
`;
