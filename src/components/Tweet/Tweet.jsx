import { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { updateFollowers } from '../../utils/backend';
import { CardContainer, CardImage, Line, Logo } from './Tweet.styled';
import StatisticsList from 'components/StatisticsList/StatisticsList';

const Tweet = ({ imageURL, folowers, tweets, id }) => {
  const TOKEN = 'followingsList';
  const [isLoading, setIsLoading] = useState(false);
  const [currentFollowers, setCurrentFollowers] = useState(folowers);
  const [isActive, setIsActive] = useState(
    JSON.parse(localStorage.getItem(TOKEN)) !== null &&
      JSON.parse(localStorage.getItem(TOKEN)).find(user => user === id)
      ? false
      : true
  );

  const handleClick = async () => {
    if (isActive) {
      setIsLoading(true);
      const storedData = JSON.parse(localStorage.getItem(TOKEN)) || [];
      const updatedData = storedData.includes(id)
        ? storedData.filter(user => user !== id)
        : [...storedData, id];

      localStorage.setItem(TOKEN, JSON.stringify(updatedData));
      const { followers } = await updateFollowers(id, 'decrement');
      setCurrentFollowers(followers);
      setIsActive(false);
      setIsLoading(false);
    }
    if (!isActive) {
      setIsLoading(true);
      const followingsList = JSON.parse(localStorage.getItem(TOKEN)) || [];
      const updatedFollowingsList = followingsList.filter(user => user !== id);

      localStorage.setItem(TOKEN, JSON.stringify(updatedFollowingsList));
      const { followers } = await updateFollowers(id, 'decrement');
      setCurrentFollowers(followers);
      setIsActive(!isActive);
      setIsLoading(false);
    }
  };
  return (
    <>
      <CardContainer>
        <Logo />
        <CardImage />
        <Line />
        <Avatar src={imageURL} />
        <StatisticsList folowers={currentFollowers} tweets={tweets} />
        <Button
          isActive={isActive}
          onClick={handleClick}
          isLoading={isLoading}
        />
      </CardContainer>
    </>
  );
};

export default Tweet;
