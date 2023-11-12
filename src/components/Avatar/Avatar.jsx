import { AvatarBackground, AvatarImage, AvavtarWrapper } from './Avatar.styled';

const Avatar = ({ src }) => {
  return (
    <AvavtarWrapper>
      <AvatarBackground>
        <AvatarImage src={src} />
      </AvatarBackground>
    </AvavtarWrapper>
  );
};

export default Avatar;
