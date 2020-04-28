import React from 'react';
import styled, { keyframes } from 'styled-components';
import ContactButton from './ContactButton.js';
import gplay from '../theme/gplay.png';

const bounce = keyframes`
  0%   { transform: translateY(0); }
  40%  { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`

const HeaderWrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.backgroundPrimary};
    background-image: url(${gplay});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

	h1 {
        color: ${props => props.theme.textWhite};
        text-transform: uppercase;
        font-size: calc(18px + 10vmin);
        letter-spacing: 0.1em;
		padding: 0 10px;
		text-shadow: 0 2px 4px ${props => props.theme.buttonBoxShadow};
	}
`;

const ContactButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: calc(250px + 2vmin);
`;

const ArrowDown = styled.a`
	position: absolute;
	bottom: 5px;
	color: ${props => props.theme.textWhite};
	font-size: 28px;
	animation: ${bounce} 1.5s ease infinite;
	text-decoration: none;
`;

const Header = ({ isNavbarFixed, scrollFromTop, onArrowClick }) =>  (
    <HeaderWrapper id="header" isNavbarFixed={isNavbarFixed}>
        <h1>Žana Flander</h1>
        <ContactButtonsWrapper>
            <ContactButton iconName="fa fa-linkedin" href="https://www.linkedin.com/in/zanaflander" size="24px" ariaLabel="LinkedIn" />
            <ContactButton iconName="fa fa-github" href="https://github.com/flanzana" size="24px" ariaLabel="GitHub" />
        </ContactButtonsWrapper>
      {(scrollFromTop < 40) && (
        <ArrowDown className="fa fa-angle-double-down" onClick={onArrowClick} aria-label="Scroll to content" />
      )}
    </HeaderWrapper>
)

export default Header;