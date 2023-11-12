import Tweet from 'components/Tweet/Tweet';
import { GridContainer } from './UserList.syled';

const UserList = ({ users }) => {
  return (
    <>
      <GridContainer>
        {users.map(({ avatar, folowers, tweets, id }) => {
          return (
            <Tweet
              imageURL={avatar}
              folowers={folowers}
              tweets={tweets}
              id={id}
              key={id}
            />
          );
        })}
      </GridContainer>
    </>
  );
};

export default UserList;
