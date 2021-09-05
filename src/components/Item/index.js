import { Wrap, Image, Title, Subtitle } from './style'

const Item = ({ imageSrc, isMember = false, title, subtitle, isActive, onClick }) =>
  <Wrap isActive={isActive} onClick={onClick}>
    <Image src={imageSrc} isMember={isMember} alt={title} />
    <div>
      <Title isActive={isActive}>{title}</Title>
      {subtitle && <Subtitle isActive={isActive}>{subtitle}</Subtitle>}
    </div>
  </Wrap>

export default Item