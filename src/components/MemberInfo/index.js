import { Wrap, Label, Image, Floral, Name, Title, Quote } from './style'
import floralSrc from '../../assets/img/floral.png'

const MemberInfo = ({ imageSrc, nameText, title, quote }) =>
  <Wrap>
    <Label>Detalhes da personagem</Label>
    <Image src={imageSrc} />
    <Name><Floral src={floralSrc} />{nameText}</Name>
    <Label>Título</Label>
    <Title>{title}</Title>
    <Label>Citação</Label>
    <Quote>{quote || 'Sem citação'}</Quote>
  </Wrap>

export default MemberInfo