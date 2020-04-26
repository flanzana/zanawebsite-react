import React from 'react';
import styled from 'styled-components';
import ContactButton from './ContactButton.js';
// import CVfile from '../data/Flander-Zana-CV.pdf';

const FooterWrapper = styled.div`
	background-color: ${props => props.theme.backgroundPrimary};
	color: ${props => props.theme.textWhite};
	height: calc(120px + 2vmin);
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: space-around;
    padding: 20px;

	p {
		font-size: 12px;
		margin: 0 auto;
		padding: 0 20px;
	}
`;

const ContactButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
	width: calc(280px + 2vmin);

	@media (max-width: 500px) {
		width: 250px;
	}
`;

const Footer = () => (
    <FooterWrapper id="contact">
		<ContactButtonsWrapper>
            <ContactButton iconName="fa fa-linkedin" href="https://www.linkedin.com/in/zanaflander" size="16px" />
            <ContactButton iconName="fa fa-github" href="https://github.com/flanzana" size="16px" />
			<ContactButton iconName="fa fa-twitter" href="https://twitter.com/flanzana" size="16px" />
			<ContactButton iconName="fa fa-envelope" href="mailto:zana.flander@gmail.com" size="16px" />
			{/* <ContactButton iconName="fa fa-file-text" href={CVfile} size="16px" /> */}
        </ContactButtonsWrapper>
        <p>Coded and designed with ❤ by Žana Flander. © 2019</p>
    </FooterWrapper>
)

export default Footer;