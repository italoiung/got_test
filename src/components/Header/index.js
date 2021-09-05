import logoSrc from '../../assets/img/logo.png'
import { Wrap, Logo, Line, Title } from './style'

const Header = () =>
  <Wrap>
    <Logo src={logoSrc} />
    <Line />
    <Title>Quem é quem em Westeros</Title>
  </Wrap>

export default Header