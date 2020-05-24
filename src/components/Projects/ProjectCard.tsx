import React from "react"
import styled from "styled-components"
import TextLink from "../common/TextLink"
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons"

const StyledProjectCard = styled.div`
  width: 170px;
  height: fit-content;
  padding: 14px 20px;
  margin: 15px;
  text-decoration: none;
  color: ${props => props.theme.textNormal};
  border: 0.5px solid ${props => props.theme.backgroundNormalHover};
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 ${props => props.theme.projectBoxShadow};
  outline: none;

  img {
    width: 170px;
    margin: 3px 0;
  }
`

const StyledHeading = styled.h2`
  color: ${props => props.theme.textPrimary};
  font-size: 0.9em;
  text-align: center;
  margin: 0;
`

const TextLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
`

type Props = {
  name: string
  img: React.ReactElement
  urlWeb: string
  urlCode: string
}

const ProjectCard: React.FC<Props> = ({ name, img, urlWeb, urlCode }: Props) => (
  <StyledProjectCard>
    <StyledHeading>{name}</StyledHeading>
    {img}
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
