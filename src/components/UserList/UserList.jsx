import Tweet from '../Tweet/Tweet';
import { GridContainer } from './UserList.syled';

const UserList = ({ users }) => {
  return (
    <>
      <GridContainer>
        {users.map(({ avatar, followers, tweets, id }) => {
          return (
            <Tweet
              imageURL={avatar}
              followers={followers}
              tweets={tweets}
              key={id}
              id={id}
            />
          );
        })}
      </GridContainer>
    </>
  );
};

export default UserList;
