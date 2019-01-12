import React, { Component } from 'react';
import styled from 'styled-components';
import ContactButtons from './ContactButtons.js';

const FooterDiv = styled.div`
	background-color: ${props => props.theme.primary};
	color: ${props => props.theme.white};
	height: calc(100px + 2vmin);
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: space-around;
    padding: 20px;

	p {
		font-size: 12px;
		margin: 0 auto;
	}
`;

const Footer = () => (
    <FooterDiv>
        <ContactButtons size="16px" />
        <p>Coded and designed with ❤ by Žana Flander. © 2019</p>
    </FooterDiv>
)

export default Footer;