import UserList from 'components/UserList/UserList';
import { useState } from 'react';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <UserList users={users} />
    </>
  );
};

export default TweetsPage;
