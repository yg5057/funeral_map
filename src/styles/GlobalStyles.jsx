import { createGlobalStyle } from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyles = createGlobalStyle`
 /* reset.css */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }
  html, body {
    height: 100%;
    font-size: 100%;
    line-height: 1.15;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar { display: none; } 
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none; 
}
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  textarea {
    resize: none;
}
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
  a {
    color: inherit;
    text-decoration: none;
  }
  ul[role='list'], ol[role='list'] {
    list-style: none;
  }
  li {
    list-style: none;
  }



  /* font */
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


  :root {
  /* font */
  --font-size-base: 62.5%; 
  --font-family-primary: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-secondary: 'GmarketSansMedium', sans-serif;
  /* color */
  --background-color: #FFFF;
  --text-color: #343a40;
  --text-color-rv: #FFFF;
  /* 변경할 것 */
  --White: #FFFF;
  --Black: #1b1b1b;
  --Default-Blue: #248CFA;
  --Grey: #1B1B1B66;
  --Input-bg: #F4F8FF;
  --Input-border: #0472F5;
  --Input-label: #476490;
  --InfoWindow-title-bg: #E2BB8F;
  --InfoWindow-conts-title: #D59962;
  /* color system */
  --Default-White: #FFFF;
  --Default-Black: #1b1b1b;
  --Outer-Space-50: #f4f6f7;
  --Outer-Space-100: #e3e8ea;
  --Outer-Space-200: #c9d3d8;
  --Outer-Space-300: #a4b4bc;
  --Outer-Space-400: #778c99;
  --Outer-Space-500: #5c717e;
  --Outer-Space-600: #4f5f6b;
  --Outer-Space-700: #44505a;
  --Outer-Space-800: #3d454d;
  --Outer-Space-900: #343a40;
  --Outer-Space-950: #21262b;
  --AlbescentWhite-50: #fbf7f1;
  --AlbescentWhite-100: #f5e9d7;
  --AlbescentWhite-200: #edd7bb;
  --AlbescentWhite-300: #e2bb8f;
  --AlbescentWhite-400: #d59962;
  --AlbescentWhite-500: #cc7f43;
  --AlbescentWhite-600: #be6a38;
  --AlbescentWhite-700: #9e5330;
  --AlbescentWhite-800: #7f442d;
  --AlbescentWhite-900: #673927;
  --AlbescentWhite-950: #371c13;
  --Almond-300: #DCB695;
  /* DropShadow */
  /* --DropShadow-Bottom-XS: 0px 1px 2px 0px rgba(28, 39, 49, 0.08);
  --DropShadow-Bottom-S: 0px 2px 6px 0px rgba(28, 39, 49, 0.08);
  --DropShadow-Bottom-M: 0px 6px 12px 0px rgba(28, 39, 49, 0.05);
  --DropShadow-Bottom-L: 0px 17px 33px -2px rgba(28, 39, 49, 0.05);
  --DropShadow-Bottom-XL: 0px 25px 40px -10px rgba(28, 39, 49, 0.08);
  --DropShadow-Bottom-XXL: 0px 25px 60px -10px rgba(28, 39, 49, 0.12); */

/* DropShadow - 변경할 것 */
--DropShadow-Bottom-XS: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
--DropShadow-Bottom-S: 4px 4px 3px 0px rgba(0, 0, 0, 0.20);
--DropShadow-Bottom-M: 0px 4px 4px 0px rgba(0, 0, 0, 0.20);
--DropShadow-Right-L:  4px 4px 3px 0px rgba(0, 0, 0, 0.20);
/* new */
--DropShadow-XL-Right: 25px 0px 60px -10px rgba(28, 39, 49, 0.12);

}

  /* Global 기본 스타일 */
  html{ font-size: var(--font-size-base); }
  body {
    font-family: var(--font-family-primary);
    color: var(--text-color);
    background-color: var(--background-color);
  }
  
`;

export default GlobalStyles;
