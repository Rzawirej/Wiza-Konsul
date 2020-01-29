import React from 'react';
import {Table,Menu,Icon} from 'semantic-ui-react';

class SprawyList extends React.Component
{
  constructor (props)
{
super(props)

}

render(){
  
 try{
  const sprawyLista=  this.props.sprawy.map((sprawa) => {
  return (
         <Table.Row key={sprawa.identyfikator} onClick={()=>{this.props.wybierzSprawę(sprawa.identyfikator)}}> 
         <Table.Cell>{sprawa.imiona}</Table.Cell>
             <Table.Cell>{sprawa.nazwisko}  </Table.Cell>
         <Table.Cell>{sprawa.celWydania}</Table.Cell>
         <Table.Cell>{sprawa.rodzajWizy}</Table.Cell>
    
         </Table.Row>)
    });
    return (  <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Imiona</Table.HeaderCell>
          <Table.HeaderCell>Nazwisko</Table.HeaderCell>
          <Table.HeaderCell>Cel wydania</Table.HeaderCell>
          <Table.HeaderCell>Rodzaj Wizy</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {sprawyLista}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          
          <Table.HeaderCell colSpan='4'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon >
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a' icon o>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>);
  }
  catch(err)
  {
    console.log(err);
    return null;
  }
  
  
}
}
export default SprawyList;
/*<div role="listitem" className="item" style={{borderBottom:'1px solid blue'}}  key={sprawa.identyfikator} onClick={()=>{this.props.wybierzSprawę(sprawa.identyfikator)}}>
          <div className="content">ID: {sprawa.identyfikator}     Imiona: {sprawa.imiona}    Nazwisko: {sprawa.nazwisko}    Cel wydania: {sprawa.celWydania}     Rodzaj wizy: {sprawa.rodzajWizy}</div>
         </div>*/