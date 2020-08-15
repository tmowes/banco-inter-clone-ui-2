import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import Button from '../Button'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 26.4rem;
    max-height: 60rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.default};
    box-shadow: ${theme.shadows.default};
    padding: 1.6rem;
  `}
`
export const InvestedButton = styled(Button)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.small};
    border-radius: ${theme.radius.small};
    width: 100%;
    margin: 0.8rem 0;
    text-align: left;
    background: ${`linear-gradient(90deg, ${theme.colors.primaryDark} 0%, ${theme.colors.primary} 100%)`};
    svg {
      margin-left: auto;
      stroke: ${theme.colors.white};
    }
    &:hover {
      transform: scale(1.005);
      box-shadow: ${theme.shadows.default};
      ${transparentize(0.72, theme.colors.primaryDark)};
    }
  `}
`
