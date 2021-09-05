import background from './assets/img/background.png'
import styled, { createGlobalStyle } from 'styled-components'

const themeBreakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const theme = {
  white: '#FFFFFF',
  black: '#000000',
  columnBg: '#151515',
  columnTitle: '#444444',
  itemBg: '#222222',
  itemBgActive: '#DEDEDE',
  itemBorderHover: 'linear-gradient(90deg, #AAAAAA, #833C1D00)',
  itemTitleActive: '#414141',
  itemSubtitle: '#666666',
  itemSubtitleActive: '#868686',
  mainFont: 'Montserrat',
  quoteFont: 'EB Garamond',
  nameFont: 'Lora',
  rem: (px, unit = 16) => `${px / unit}rem`
}

Object.entries(themeBreakpoints).forEach(([breakpoint, value]) => {
  theme[breakpoint] = (content) => `
    @media (min-width: ${value}px) {
      ${content}
    }
  `
})

export default theme

export const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
svg {
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
html {
  box-sizing: border-box;
  font: normal 600 85%/1.25 '${theme.mainFont}', sans-serif;
  ${theme.md(`
    font-size: 100%;
  `)}
}
body {
  background-image: url('${background}');
  background-size: cover;
  color: ${theme.white};
  overflow-x: hidden;
  position: relative;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  outline: none;
}
a {
  color: inherit;
  text-decoration: none;
}
`

export const Layout = styled.div`
  padding: ${({ theme }) => theme.rem(52)} ${({ theme }) => theme.rem(85)};
`

export const ColumnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`