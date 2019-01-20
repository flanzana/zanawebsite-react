import styled, { injectGlobal, css } from 'styled-components';

export const themePurple = {
	primary: '#4a266a',
	secondary: '#61c0bf',
	secondaryLight: '#dbf0f0',
	white: '#ffffff',
	light: '#f6f6f6',
	dark: '#5c5c5c'
};

export const themeGreen = {
	primary: '#186A3B',
	secondary: '#61c0bf',
	secondaryLight: '#dbf0f0',
	white: '#ffffff',
	light: '#f6f6f6',
	dark: '#5c5c5c'
};

export const themeBlue = {
	primary: '#1B4F72',
	secondary: '#61c0bf',
	secondaryLight: '#dbf0f0',
	white: '#ffffff',
	light: '#f6f6f6',
	dark: '#5c5c5c'
};

export const themeRed = {
	primary: '#B22222',
	secondary: '#61c0bf',
	secondaryLight: '#dbf0f0',
	white: '#ffffff',
	light: '#f6f6f6',
	dark: '#5c5c5c'
};

export const themeOrange = {
	primary: '#A04000',
	secondary: '#61c0bf',
	secondaryLight: '#dbf0f0',
	white: '#ffffff',
	light: '#f6f6f6',
	dark: '#5c5c5c'
};

export const themeDark = {
	primary: '#283747',
	secondary: '#61c0bf',
	secondaryLight: '#dbf0f0',
	white: '#ffffff',
	light: '#f6f6f6',
	dark: '#5c5c5c'
};

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto:400,900|Coda');
	@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css');

	body {
		padding: 0;
		margin: 0;
		font-family: Roboto, sans-serif;
		min-width: 320px;
	}

	h1 {
		font-family: Coda, cursive;
		font-weight: 900;
		text-align: center;
	}
`;

export const MainTitle = styled.h1`
	color: ${props => props.theme.primary};
	text-transform: uppercase;
	font-size: 2em;
	margin-top: 0;
	line-height: 1.75em;
	border-bottom: 1px solid #b7b7b7;
	width: 280px;
`;

export const MainSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 65px 0 50px 0;

	${props =>
		props.bgl &&
		css`
			background-color: ${props => props.theme.light};
	`};
	${props =>
		props.bgw &&
		css`
			background-color: ${props => props.theme.white};
	`};
`;