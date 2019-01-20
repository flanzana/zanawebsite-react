import React from 'react';
import styled, { keyframes } from 'styled-components';

const movesidebar = keyframes`
    0% {
        height: 30px;
    }
    100% {
        height: 204px;
    }
`;

const SideBarWrapper = styled.div`
    background-color: ${props => props.theme.primary};
    margin-top: 70px;
    width: 200px;
    list-style: none;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${movesidebar} 0.6s ease-out 1;

    &.fixed {
        position: fixed;
        z-index: 800;
        top: 0;
    }

    li {
        padding: 16px;
        cursor: pointer;

        &:hover {
            background-color: ${props => props.theme.secondary};
        }
    }

    a {
        color: ${props => props.theme.white};
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
    }

`

const NavItem = ({ href, title} ) => (
    <li>
        <a href={href}>
            {title}
        </a>
    </li>
)

const SideBar = ({ isNavbarFixed }) => (
    <SideBarWrapper id="sidebar" className={isNavbarFixed ? "fixed" : ""}>
        <NavItem href="#aboutme" title="About me" />
        <NavItem href="#skills" title="Skills" />
        <NavItem href="#projects" title="Projects" />
        <NavItem href="#contact" title="Contact" />
    </SideBarWrapper>
)

export default SideBar;