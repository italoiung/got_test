import styled from 'styled-components'

export const Wrap = styled.header`
  width: 586px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.rem(85)};
  ${({ theme }) => theme.md(`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `)}
`

export const Logo = styled.img`
  width: 270px;
`

export const Line = styled.span`
  width: 1px;
  height: 30px;
  background-color: ${({ theme }) => theme.white};
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.rem(11)};
  letter-spacing: 0.25em;
  text-transform: uppercase;
`