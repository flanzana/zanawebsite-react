import React from 'react';
import styled from 'styled-components';
import ContactButton from './ContactButton.js';
import gplay from '../theme/gplay.png';

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
	}
`;

const ContactButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: calc(250px + 2vmin);
`;

/* const ArrowDown = styled.div`
	position: absolute;
	bottom: 5px;
	color: ${props => props.theme.textWhite};
	font-size: 23px;
`; */

const Header = ({ isNavbarFixed }) =>  (
    <HeaderWrapper id="header" isNavbarFixed={isNavbarFixed}>
        <h1>Žana Flander</h1>
        <ContactButtonsWrapper>
            <ContactButton iconName="fa fa-linkedin" href="https://www.linkedin.com/in/zanaflander" size="24px" />
            <ContactButton iconName="fa fa-github" href="https://github.com/flanzana" size="24px" />
        </ContactButtonsWrapper>
        {/* <ArrowDown className="fa fa-angle-double-down" aria-hidden="true" /> */}
    </HeaderWrapper>
)

export default Header;