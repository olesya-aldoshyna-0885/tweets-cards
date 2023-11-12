import { List, ListItem } from './StatisticsList.styled';
import numeral from 'numeral';

const StatisticsList = ({ tweets, followers }) => {
  return (
    <List>
      <ListItem>{numeral(tweets).format('0, 0')} tweets</ListItem>
      <ListItem>{numeral(followers).format('0, 0')} followers</ListItem>
    </List>
  );
};

export default StatisticsList;
