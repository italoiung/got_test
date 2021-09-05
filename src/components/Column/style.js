import styled from 'styled-components'

export const Outter = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrap = styled.div`
  padding: ${({ theme }) => theme.rem(9)} ${({ theme }) => theme.rem(20)};
  width: ${({ theme }) => theme.rem(360)};
  background-color: ${({ theme }) => theme.columnBg};
  margin-bottom: ${({ theme }) => theme.rem(35)};
  flex: 1 1 auto;
  ${({ theme }) => theme.md(`
    margin-bottom: 0;
    margin-right: ${theme.rem(70)};
  `)}
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.rem(11)};
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.columnTitle};
  margin-bottom: ${({ theme }) => theme.rem(27)};
  flex: 0 0 auto;
`