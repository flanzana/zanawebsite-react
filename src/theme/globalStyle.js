import styled, { injectGlobal } from 'styled-components';

// color palette
const PRIMARY_NORMAL = '#4f3b78'
const PRIMARY_LIGHT = '#927fbf'
const SECONDARY_NORMAL = '#61c0bf'
const INK_LIGHT = '#505568'
const INK_NORMAL = '#363b4e'
const CLOUD_NORMAL = '#eff2f5'
const CLOUD_DARK = '#e8edf1'
const SHADOW_COLOR_DARK = 'rgba(0, 0, 0, 0.3)'
const SHADOW_COLOR_DARKER = 'rgba(0, 0, 0, 0.6)'

const commonColors = {
	backgroundPrimary: PRIMARY_NORMAL,
	backgroundPrimaryHover: PRIMARY_LIGHT,
	buttonBackground: CLOUD_NORMAL,
	buttonBackgroundHover: SECONDARY_NORMAL,
	buttonText: PRIMARY_NORMAL,
	buttonTextHover: CLOUD_NORMAL,
	textSecondary: SECONDARY_NORMAL,
	textWhite: CLOUD_NORMAL,
	navbarBoxShadow: SHADOW_COLOR_DARK,
	buttonBoxShadow: SHADOW_COLOR_DARKER,
	projectBoxShadow: SHADOW_COLOR_DARK,
}

export const themeLightMode = {
	type: "light",
	backgroundNormal: CLOUD_NORMAL,
	backgroundNormalHover: CLOUD_DARK,
	textNormal: INK_NORMAL,
	textPrimary: PRIMARY_NORMAL,
	...commonColors,
};

export const themeDarkMode = {
	type: "dark",
	backgroundNormal: INK_NORMAL,
	backgroundNormalHover: INK_LIGHT,
	textNormal: CLOUD_DARK,
	textPrimary: PRIMARY_LIGHT,
	...commonColors,
};

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto:400,900|Coda');
	@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css');

	body {
		padding: 0;
		margin: 0;
		font-family: Roboto, sans-serif;
		min-width: 320px;
		cursor: default;
	}

	h1 {
		font-family: Coda, cursive;
		font-weight: 900;
		text-align: center;
	}
`;

export const MainTitle = styled.h1`
	color: ${props => props.theme.textPrimary};
	text-transform: uppercase;
	font-size: 2em;
	margin-top: 0;
	line-height: 1.75em;
	border-bottom: 1px solid ${props => props.theme.textNormal};
	width: 280px;
`;

export const MainSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 65px 0 50px 0;
	background-color: ${props => props.theme.backgroundNormal};
`;