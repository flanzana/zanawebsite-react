// @flow
import React from "react"
import styled from "styled-components"

const StyledProjectCard = styled.a`
  width: 180px;
  padding: 10px;
  margin: 15px;
  text-decoration: none;
  color: ${props => props.theme.textNormal};
  border-radius: 10px;
  transition: 0.4s;
  box-shadow: 0 2px 4px 0 ${props => props.theme.projectBoxShadow};

  img {
    width: 180px;
  }

  &:hover {
    transition: 0.4s;
    background-color: ${props => props.theme.backgroundNormalHover};
    box-shadow: 0 4px 12px 0 ${props => props.theme.projectBoxShadow};
  }

  &:active {
    transition: 0.2s;
    background-color: ${props => props.theme.backgroundNormalHover};
    box-shadow: 0 2px 6px 0 ${props => props.theme.projectBoxShadow};
  }
`

const StyledHeading = styled.span`
  text-decoration: none;
  text-align: center;
  margin: 3px 0;
  font-size: 13px;
`

type Props = {|
  name: string,
  img: React$Element<"img">,
  url: string,
|}

const ProjectCard = ({ name, img, url }: Props) => (
  <StyledProjectCard href={url} target="_blank" rel="noopener noreferrer">
    {img}
    <StyledHeading>{name}</StyledHeading>
  </StyledProjectCard>
)

export default ProjectCard