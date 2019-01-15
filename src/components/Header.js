import React from 'react';
import styled from 'styled-components';
import ContactButtons from './ContactButtons.js';
import gplay from '../theme/gplay.png';

const HeaderWrapper = styled.div`
    height: ${window.innerHeight}px;
    width: 100%;
    background-color: ${props => props.theme.primary};
    background-image: url(${gplay});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

	h1 {
		color: ${props => props.theme.white};
		font-size: calc(18px + 10vmin);
		padding: 0 10px;
	}
`;

/* const ArrowDown = styled.div`
	position: absolute;
	bottom: 5px;
	color: ${props => props.theme.white};
	font-size: 23px;
`; */

const Header = ({ isNavbarFixed }) =>  (
    <HeaderWrapper id="header" isNavbarFixed={isNavbarFixed}>
        <h1>Žana Flander</h1>
        <ContactButtons size="24px" />
        {/* <ArrowDown className="fa fa-angle-double-down" aria-hidden="true" /> */}
    </HeaderWrapper>
)

export default Header;