import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`

export const Wrapper = styled.div`
  max-width: 100rem;
  height: 10.4rem;
  width: 96%;
  display: flex;
  justify-content: space-between;
`

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  > svg {
    max-width: 11.2rem;
    height: auto;
    margin: 0 2.4rem 1.1rem 0;
  }
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
`

export const RightNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  svg {
    height: 1.75rem;
    margin-right: 0.4rem;
  }
`

export const Gradient = styled.header`
  width: 100%;
  height: 6.4rem;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.colors.primaryDark} 0%, ${theme.colors.primary} 100%);`};
`
