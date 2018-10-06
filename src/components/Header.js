import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const HeaderDiv = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

	h1 {
		color: ${props => props.theme.white};
		font-size: calc(18px + 10vmin);
		font-weight: 900;
		padding: 0 10px;
		text-transform: uppercase;
	}
`;

const ContactDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
	width: 300px;
`;

const ContactButton = styled.a`
    width: calc(16px + 3vmin);
	height: calc(16px + 3vmin);
	font-size: calc(16px + 3vmin);
    background-color: ${props => props.theme.white};
	color: ${props => props.theme.primary};
	border-radius: 50%;
    margin: 0 auto;
    padding: calc(5px + 1vmin);
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

const ArrowDown = styled.div`
	position: absolute;
	bottom: 5px;
	color: ${props => props.theme.white};
	font-size: 23px;
`;

class Header extends Component {
    render() {
        return(
            <HeaderDiv theme={this.props.theme}>
                <h1>Žana Flander</h1>
                <ContactDiv>
                    <ContactButton href="https://www.linkedin.com/in/zanaflander" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                    </ContactButton>
                    <ContactButton href="https://github.com/flanzana" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                    </ContactButton>
                    <ContactButton href="mailto:zana.flander@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-envelope"></i>
                    </ContactButton>
                    <ContactButton href="%PUBLIC_URL%/Flander-Zana-CV.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-file-text"></i>
                    </ContactButton>
                </ContactDiv>
				<ArrowDown className="fa fa-angle-double-down" aria-hidden="true" />
            </HeaderDiv>
        )
    }
}

export default Header;