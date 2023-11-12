import { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { CardContainer, CardImage, Line, Logo } from './Tweet.styled';

const Tweet = ({ imageURL, folowers, tweets, id }) => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {};
  if (isActive) {
    setIsLoading(true);
    setIsActive(false);
  }
  // if (!isActive) {
  //   setIsLoading(!isActive);
  //   setIsActive(false);
  // }
  return (
    <>
      <CardContainer>
        <Logo />
        <CardImage />
        <Line />
        <Avatar src={imageURL} />
        <Button
          isActive={isActive}
          isLoading={isLoading}
          onClick={handleClick}
        />
      </CardContainer>
    </>
  );
};

export default Tweet;
