import React from 'react';
import styled, { keyframes } from 'styled-components';
//import CVfile from '../data/Flander-Zana-CV.pdf';

const rotate360 = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ContactButton = styled.a`
    width: calc(${props => props.size} + 2vmin);
	height: calc(${props => props.size} + 2vmin);
	font-size: calc(${props => props.size} + 2vmin);
    background-color: ${props => props.theme.white};
	color: ${props => props.theme.primary};
	border-radius: 50%;
    margin: 0 calc(${props => props.size}/2 + 1vmin);
    padding: calc(${props => props.size}/3 + 0.5vmin);
    display: flex;
    justify-content: center;
    align-items: center;
	text-decoration: none;
	&:first-of-type {
		margin-left: 0
	}
	&:last-of-type {
		margin-right: 0
	}
	&:hover {
		animation: ${rotate360} 0.3s linear 1;
		box-shadow: 0px 0px 20px 5px rgba(255,255,255,1);
	}
`;

const ContactButtons = (props) => (
    <ContactsWrapper>
        <ContactButton href="https://www.linkedin.com/in/zanaflander" target="_blank" rel="noopener noreferrer" size={props.size}>
            <i className="fa fa-linkedin"></i>
        </ContactButton>
        <ContactButton href="https://github.com/flanzana" target="_blank" rel="noopener noreferrer" size={props.size}>
            <i className="fa fa-github"></i>
        </ContactButton>
        <ContactButton href="mailto:zana.flander@gmail.com" target="_blank" rel="noopener noreferrer" size={props.size}>
            <i className="fa fa-envelope"></i>
        </ContactButton>
        {/*<ContactButton href={CVfile} target="_blank" rel="noopener noreferrer" size={props.size}>
            <i className="fa fa-file-text"></i>
</ContactButton>*/}
    </ContactsWrapper>
)
    


export default ContactButtons;