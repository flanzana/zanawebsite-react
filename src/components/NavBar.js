import React from 'react';
import styled, { keyframes } from 'styled-components';

const movenavbar = keyframes`
    0% {
        height: 0;
    }
    100% {
        height: 70px;
    }
`;

const NavBarWrapper = styled.div`
    height: 70px;
    width: calc(100% - 40px);
    background-color: ${props => props.theme.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 900;
    position: relative;
    animation: ${movenavbar} 0.3s ease-out 1;
    margin-bottom: -70px;
    top: 0;
    padding: 0 20px;
    box-shadow: 0 3px 8px rgba(0,0,0,0.25);

    &.fixed {
        position: fixed; 
    }

	h1 {
		color: ${props => props.theme.white};
		font-size: 30px;
        margin: 0;
	}

    ul {
        list-style: none;
        display: flex;
	    justify-content: space-between;
        margin: 0;
    }

    li {
        margin: 0 14px;

        &:first-of-type {
            margin-left: 0;
        }
        &:last-of-type {
            margin-right: 0;
        }
    }

    a {
        color: ${props => props.theme.white};
        text-decoration: none;
        
        &:hover {
            color: ${props => props.theme.secondary};
        }
    }
`;

const StyledHamburgerIcon = styled.button`
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primary};
    border: none;
    font-size: 30px;
    cursor: pointer;
`

const NavItem = ({ href, title} ) => (
    <li>
        <a href={href}>
            {title}
        </a>
    </li>
)

const NavBar = ({ isNavbarFixed, width, toggleMenu }) => (
    <NavBarWrapper id="navbar" className={isNavbarFixed ? "fixed" : ""}>
        <h1>Žana Flander</h1>

        {(width < 700) ? (
            <StyledHamburgerIcon id="hamburger-icon" onClick={toggleMenu}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </StyledHamburgerIcon>
        ) : (
            <ul>
                <NavItem href="#aboutme" title="About me" />
                <NavItem href="#skills" title="Skills" />
                <NavItem href="#projects" title="Projects" />
                <NavItem href="#contact" title="Contact" />
            </ul>
        )}
    </NavBarWrapper>
)

export default NavBar;