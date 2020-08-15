import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

const variants = {
  secondary: css`
    background: transparent;
    border: 0.2rem solid ${({ theme }) => theme.colors.primaryDark};
  `,
  transparent: css`
    background: transparent;
  `,
}

export const Container = styled.button<ButtonProps>`
  ${({ theme, variant }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.white};
    border: 0;
    padding: 0.8rem 1.6rem;
    border-radius: 0.8rem;
    color: ${theme.colors.primaryDark};
    transition: ${theme.transition.default};
    * {
      transition: ${theme.transition.default};
    }
    ${variant && variants[variant]};
  `}
`
