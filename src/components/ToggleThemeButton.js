import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.a`
  width: calc(${props => props.size} + 2vmin);
	height: calc(${props => props.size} + 2vmin);
	font-size: calc(${props => props.size} + 2vmin);
	color: ${props => props.theme.textWhite};
	background-color: ${props => props.theme.backgroundPrimaryHover};
	border-radius: 50%;
  padding: calc(${props => props.size}/3 + 0.5vmin);
  display: flex;
  justify-content: center;
  align-items: center;
	text-decoration: none;
	position: fixed;
	right: 10px;
	bottom: 10px;
	cursor: pointer;
	z-index: 1;

	&:hover {
		background-color: ${props => props.theme.textSecondary};
	}
`;

const ToggleThemeButton = (props) => (
  <ButtonWrapper onClick={props.onClick} size="10px" tabIndex="1" aria-label={`Switch to ${props.isCurrentDarkMode ? "light" : "dark"} mode`}>
    <i className={props.isCurrentDarkMode ? "fa fa-sun-o" : "fa fa-moon-o"} aria-hidden="true" />
  </ButtonWrapper>
)


export default ToggleThemeButton;