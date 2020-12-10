import React from "react"
import styled from "styled-components"
import TextLink from "../common/TextLink"
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons"
import { ProjectType } from "../../types"

const StyledProjectCard = styled.div`
  width: 230px;
  height: fit-content;
  padding: 20px;
  text-decoration: none;
  color: ${props => props.theme.textNormal};
  border: 0.5px solid ${props => props.theme.backgroundNormalHover};
  border-radius: 10px;
  box-shadow: 1px 2px 6px 0 ${props => props.theme.projectBoxShadow};

  img {
    width: 170px;
    margin: 0;
  }
`

const StyledImageLink = styled.a`
  outline: none;
  margin: 0;
`

const StyledHeading = styled.h2`
  color: ${props => props.theme.textPrimary};
  font-size: 1.1em;
  text-align: center;
  margin: 0 0 10px 0;
`

const StyledDescription = styled.p`
  font-size: 0.9em;
  margin: 10px 0;
`

const StyledTech = styled.p`
  font-size: 0.8em;
  margin: 10px 0;
`

const TextLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 14px 0 0 0;
`

const StyledHorizontalLine = styled.hr`
  height: 0.5px;
  border: 0;
  background-color: ${props => props.theme.backgroundNormalHover};
`

const ProjectCard: React.FC<ProjectType> = ({
  name,
  img,
  urlWeb,
  urlCode,
  description,
  tech,
}: ProjectType) => (
  <StyledProjectCard>
    <StyledHeading>{name}</StyledHeading>
    <StyledImageLink href={urlWeb} tabIndex={-1} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={`Screenshot of ${name}`} />
    </StyledImageLink>
    <StyledDescription>{description}</StyledDescription>
    <StyledHorizontalLine />
    <StyledTech>{tech.join(", ")}</StyledTech>
    <StyledHorizontalLine />
    <TextLinksWrapper>
      <TextLink
        href={urlWeb}
        iconName={faLink}
        type="secondary"
        size="small"
        ariaLabel={`Go to ${name} website`}
      >
        Web
      </TextLink>
      <TextLink
        href={urlCode}
        iconName={faCode}
        type="secondary"
        size="small"
        ariaLabel={`Go to ${name} GitHub code`}
      >
        Code
      </TextLink>
    </TextLinksWrapper>
  </StyledProjectCard>
)

export default ProjectCard
