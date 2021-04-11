import React from "react"
import styled from "styled-components"
import { CSS_MEDIA_QUERY } from "../../theme/consts"

const StyledTitle = styled.h2`
  color: ${props => props.theme.textPrimary};
  text-transform: uppercase;
  font-size: 36px;
  margin-bottom: 24px;

  &:before,
  &:after {
    display: inline-block;
    content: "• • •";
    color: ${props => props.theme.backgroundNormalHover};
  }

  &:before {
    margin-right: 20px;
  }

  &:after {
    margin-left: 20px;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100%-20px);
  padding: 30px 10px 20px 10px;
  scroll-margin-top: 30px;

  &:last-of-type {
    padding-bottom: 30px;
  }

  @media ${CSS_MEDIA_QUERY.MIN_TABLET} {
    width: calc(100%-40px);
    padding: 40px 20px 30px 20px;

    &:last-of-type {
      padding-bottom: 50px;
    }
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
