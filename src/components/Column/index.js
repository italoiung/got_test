import { Outter, Wrap, Title } from './style'

const Column = ({ children, title }) =>
  <Outter>
    <Title>{title}</Title>
    <Wrap>
      {children}
    </Wrap>
  </Outter>

export default Column