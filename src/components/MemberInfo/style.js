import styled from 'styled-components'

export const Wrap = styled.div`
  padding: ${({ theme }) => theme.rem(70)} ${({ theme }) => theme.rem(60)};
  width: ${({ theme }) => theme.rem(400)};
  background-color: ${({ theme }) => theme.columnBg};
  text-align: center;
  ${({ theme }) => theme.md(`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  `)}
`

export const Label = styled.p`
  font-size: ${({ theme }) => theme.rem(11)};
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.columnTitle};
  margin-bottom: ${({ theme }) => theme.rem(27)};
  &:first-child {
    margin-bottom: ${({ theme }) => theme.rem(70)};
  }
`

export const Image = styled.img`
  width: ${({ theme }) => theme.rem(193)};
  height: ${({ theme }) => theme.rem(261)};
  border: 2px solid ${({ theme }) => theme.white};
  margin-bottom: ${({ theme }) => theme.rem(40)};
  object-fit: cover;
`

export const Floral = styled.img`
  width: ${({ theme }) => theme.rem(60)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Name = styled.h2`
  position: relative;
  font-family: ${({ theme }) => theme.nameFont};
  font-weight: 400;
  font-size: ${({ theme }) => theme.rem(22)};
  margin-bottom: ${({ theme }) => theme.rem(47)};
`

export const Title = styled.h3`
  font-weight: 400;
  font-size: ${({ theme }) => theme.rem(14)};
  margin-bottom: ${({ theme }) => theme.rem(29)};
`

export const Quote = styled.h3`
  font-family: ${({ theme }) => theme.quoteFont};
  font-weight: 400;
  font-style: italic;
  position: relative;
  &::before {
    content: "“";
    position: absolute;
    top: ${({ theme }) => theme.rem(-20)};
    left: ${({ theme }) => theme.rem(-20)};
    color: ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.rem(60)};
  }
`