import styled from 'styled-components'

export const Wrap = styled.div`
  padding: ${({ theme }) => theme.rem(12)} ${({ theme }) => theme.rem(25)};
  margin: ${({ theme }) => theme.rem(9)} 0;
  background-color: ${({ isActive, theme }) => isActive ? theme.itemBgActive : theme.itemBg};
  border: 1px solid transparent;
  &:hover {
    border-image: ${({ theme }) => theme.itemBorderHover} 1;
  }
  display: flex;
  align-items: center;
  transition: all .15s;
  cursor: pointer;
`

export const Image = styled.img`
  ${({ isMember, theme }) => isMember ? `
    border-radius: 50%;
    width: ${theme.rem(50)};
    height: ${theme.rem(50)};
    object-fit: cover;
  ` : `
    width: ${theme.rem(44)};
  `}
  margin-right: ${({ theme }) => theme.rem(20)};
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.rem(14)};
  ${({ isActive, theme }) => isActive && `color: ${theme.itemTitleActive}`};
  transition: all .15s;
`

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.rem(11)};
  color: ${({ isActive, theme }) => isActive ? theme.itemSubtitleActive : theme.itemSubtitle};
  margin-top: ${({ theme }) => theme.rem(9)};
  transition: all .15s;
`