import React from 'react';
import {
  List, ListItem, Text
} from 'native-base';

const MyList = ({ list }) => (
  <List>
    {list && list.map((item, i) => (
      <ListItem key={i}>
        <Text>{item}</Text>
      </ListItem>
    ))}
  </List>
);

export default MyList;