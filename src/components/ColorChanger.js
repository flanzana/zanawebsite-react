import React from 'react';
import styled from 'styled-components';
import { themePurple, themeBlue, themeGreen, themeOrange, themeRed, themeDark } from '../theme/globalStyle.js';

const ColorChangerWrapper = styled.div`
    height: 100px;
    width: 100%;
    background-color: ${props => props.theme.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

	p {
        color: ${props => props.theme.white};
        font-size: 12px;
        padding: 0 10px 10px 10px;
        margin: 0;
	}
`;

const ColorButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: calc(250px + 2vmin);
`;

const ColorButton = styled.button`
    background-color: ${props => props.colour};
    width: 30px;
    height: 25px;
    border: 1px solid ${props => props.theme.white};
    border-radius: 10px;
    cursor: pointer;

    &:hover {
		box-shadow: 0 0 15px 4px rgba(0,0,0,0.35);
	}
`

const ColorChanger = ({ handleColorChange }) =>  (
    <ColorChangerWrapper>
        <p>Not a fan of purple color? Feel free to select another color:</p>
        <ColorButtonWrapper>
            <ColorButton name="themeRed" colour={themeRed.primary} onClick={handleColorChange} />
            <ColorButton name="themeOrange" colour={themeOrange.primary} onClick={handleColorChange} />
            <ColorButton name="themeGreen" colour={themeGreen.primary} onClick={handleColorChange} />
            <ColorButton name="themeBlue" colour={themeBlue.primary} onClick={handleColorChange} />
            <ColorButton name="themePurple" colour={themePurple.primary} onClick={handleColorChange} />
            <ColorButton name="themeDark" colour={themeDark.primary} onClick={handleColorChange} />
        </ColorButtonWrapper>
    </ColorChangerWrapper>
)

export default ColorChanger;