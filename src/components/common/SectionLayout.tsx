import React from "react"
import styled from "styled-components"
import { CSS_MEDIA_QUERY } from "../../theme/consts"

const StyledTitle = styled.h1`
  color: ${props => props.theme.textPrimary};
  text-transform: uppercase;
  font-size: 2em;
  margin-bottom: 20px;
  line-height: 1.75em;
  border-bottom: 1px solid ${props => props.theme.textNormal};
  width: 280px;

  @media ${CSS_MEDIA_QUERY.MIN_TABLET} {
    margin-bottom: 30px;
  }
`

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0 20px 0;
  &:last-of-type {
    padding-bottom: 50px;
  }

  @media ${CSS_MEDIA_QUERY.MIN_TABLET} {
    padding: 65px 0 50px 0;
  }
`

type Props = {
  id: string
  title: string
  children: React.ReactNode
}

const SectionLayout: React.FC<Props> = ({ id, title, children }: Props) => (
  <StyledSection id={id}>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </StyledSection>
)

export default SectionLayout
