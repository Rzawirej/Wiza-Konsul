import React from 'react';
import { ListContent, List, Segment, Message } from 'semantic-ui-react';

const SprawyList= (props) =>
{
  try{
  const sprawyLista=  props.sprawy.map((sprawa) => {
  return <List.Item key={sprawa.id}>
    <ListContent>
      {sprawa.imie}  {sprawa.nazwisko}
    </ListContent>
      
  </List.Item>
    });
    return <Segment>
       <List divided verticalAlign='middle'>{sprawyLista}</List>
    </Segment>;
  }
  catch(err)
  {
    console.log(err);
    return null;
  }

};
export default SprawyList;