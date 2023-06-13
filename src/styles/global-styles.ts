import styled, { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
import { media } from './media';
import { Link } from 'react-router-dom';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`

* , *::before, *::after {
 box-sizing: border-box;
 padding: 0;
 margin: 0;
}

body,html{
  height: 100%;
  width: 100%;
}
  body {
    background-color: ${p => p.theme._background};
    font-size: 1rem;
    line-height: 1.5;

  }

  body.fontLoaded {
   font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p{
 	margin: 0;
	padding: 0;
	border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  p,
  label {
    line-height: 1.5em;
  }
 a,button{
    cursor: pointer;
 }
  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }
  ol, ul {
	list-style: none;
  }
  a{
    text-decoration: none;
    color : unset;
  }
  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  img{
    max-width: 100%;
    height: auto;
    display: block;
  }
  img, svg {
    vertical-align: middle;
}
.btn-register-step{
  padding: 24px 30px;
  font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #FFFFFF;
  max-width:333px;
}
`;

export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  ${media.sm} {
    max-width: ${StyleConstants.SM_CONTAINER_WIDTH};
  }
  ${media.md} {
    max-width: ${StyleConstants.MD_CONTAINER_WIDTH};
  }
  ${media.lg} {
    max-width: ${StyleConstants.LG_CONTAINER_WIDTH};
  }
  ${media.xl} {
    max-width: ${StyleConstants.XL_CONTAINER_WIDTH};
  }
  ${media.xxl} {
    max-width: ${StyleConstants.XXL_CONTAINER_WIDTH};
  }
`;

export const LinkButton = styled(Link)`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
