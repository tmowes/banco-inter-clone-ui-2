import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.greyLight};
    width: 100%;
    height: 7.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${theme.radius.small};
    padding: ${theme.spacing.default};
    padding-right: 0;
    div {
      width: 60%;
    }
    span {
      display: block;
      font-size: ${theme.fontSizes.small};
    }
    strong {
      margin-left: 0.8rem;
      color: ${theme.colors.greyDark};
    }
    p {
      height: 1.9rem;
      background: ${theme.colors.grey};
      opacity: 0.3;
      border-radius: ${theme.radius.small};
    }
    svg {
      stroke: ${theme.colors.primary};
      stroke-width: 1.6;
      :hover,
      :focus {
        stroke-width: 2;
      }
    }
  `}
`
