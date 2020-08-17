import styled, { css } from 'styled-components'
import Button from '../../Button'

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-height: 12rem;
    display: flex;
    > button:last-child {
      border-radius: 50%;
      max-width: 4rem;
      max-height: 4rem;
      padding: 0;
      width: 100%;
      height: 100%;
      margin: 0 0 2.4rem 2.4rem;
      box-shadow: ${theme.shadows.default};
      align-self: flex-end;
      svg {
        width: auto;
        height: 2.4rem;
      }
    }
  `}
`

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, minmax(8rem, 1fr));
  column-gap: 0.8rem;
`

export const Card = styled(Button)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: ${theme.colors.background};
    box-shadow: ${theme.shadows.default};
    color: ${theme.colors.grey};
    padding: ${theme.spacing.default};
    font-size: ${theme.fontSizes.default};
    div {
      background: ${theme.colors.greyLight};
      max-width: 6.4rem;
      max-height: 6.4rem;
      width: 100%;
      height: 100%;
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    svg {
      stroke: ${theme.colors.primary};
      stroke-width: 1.5;
      max-height: 2.4rem;
      height: 100%;
      width: auto;
    }
    :nth-child(2) {
      svg {
        stroke: none;
      }
  `}
`
