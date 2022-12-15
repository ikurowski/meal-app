import { createGlobalStyle } from 'styled-components';
import styles from './styles';
import { pixelToViewportWidth, breakpoints } from './utils/utils';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}
:root {
  font-size: ${pixelToViewportWidth(24)};

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: ${pixelToViewportWidth(18)};
  }

  @media (min-width: ${breakpoints.desktop}px) {
    font-size: ${pixelToViewportWidth(16)};
  }
}

body {
  background-color: ${styles.color.primary};
  font-family: ${styles.font.main};
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

`;

export default GlobalStyle;
