import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserList from 'components/UserList/UserList';
import MainButton from 'components/MainButton/MainButton';
import { getUsers } from '../utils/backend';
import { LoadBtn } from './TweetsPage.styled';
import { RingLoader } from 'react-spinners';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const newUsers = await getUsers(page);
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
        setIsLoading(false);
      } catch (err) {
        console.log('error:', err.message);
      }
    };
    fetchUsers();
  }, [page]);

  const newPages = useMemo(() => {
    const totalUsers = 20;
    const selectedUsers = users.length;
    return totalUsers > selectedUsers;
  }, [users]);

  const handlePage = () => {
    setPage(prev => prev + 1);
  };
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? `/`);

  return (
    <>
      <MainButton to={backLinkHref.current} />
      <UserList users={users} />
      {newPages && users.length !== 0 && (
        <LoadBtn onClick={handlePage}>
          {!isLoading ? 'Load more' : '...'}
        </LoadBtn>
      )}
      {users.length === 0 && (
        <RingLoader
          color={'#9c1919'}
          loading={true}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </>
  );
};

export default TweetsPage;
