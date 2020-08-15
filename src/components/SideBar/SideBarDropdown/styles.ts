import styled, { css } from 'styled-components'
import Button from '../../Button'

export const Container = styled(Button)`
  ${({ theme }) => css`
    color: ${theme.colors.greyDark};
    padding: 0.8rem 0;
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0;
    :not(:last-child) {
      border-bottom: 1px solid ${theme.colors.greyLight};
    }
    span {
      font-size: ${theme.fontSizes.default};
    }
    div:first-child {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      /* margin-left: 1.6rem; */
      margin-right: 1.6rem;
      background: ${theme.colors.greyLight};
      svg {
        stroke: ${theme.colors.primary};
      }
    }
    div:last-child {
      margin-left: auto;
      margin-right: 1.6rem;
    }
  `}
`
