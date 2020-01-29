import React from 'react';
import { Menu, Icon, Button, Table, Form } from 'semantic-ui-react';
const axios = require('axios');



const KontaTableView= (props) =>
{
  try{
  const kontaList=  props.konta.map((konto) => {
  return (
    <Table.Row key={konto.id}> 
          <Table.Cell>{konto.login}</Table.Cell>
          <Table.Cell>{konto.imiona}  {konto.nazwisko}</Table.Cell>
          <Table.Cell>#{konto.placowka}</Table.Cell>
          <Table.Cell>
            <Icon onClick={() => props.editKonto(konto.login)} color='blue' name='edit' />
            <Icon onClick={() => props.deleteKonto(konto.login)} color='red' name='close' />
          </Table.Cell>
        </Table.Row>)
      
    });
    return (
    <>
      <Form>
        <Form.Input  placeholder='Search...' value={props.searchLogin} onChange={props.handleInputChange} />
      </Form>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Identyfikator</Table.HeaderCell>
            <Table.HeaderCell>Dane osobowe</Table.HeaderCell>
            <Table.HeaderCell>Placówka</Table.HeaderCell>
            <Table.HeaderCell>Akcje</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {kontaList}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            
            <Table.HeaderCell colSpan='4'>
              <Button
                floated='left'
                icon
                labelPosition='left'
                primary
                size='small'
                onClick={props.changeIsAdding}>
                <Icon name='user' /> Dodaj
              </Button>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon onClick={props.prevPage}>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a' icon onClick={props.nextPage}>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
    );
  }
  catch(err)
  {
    console.log(err);
    return null;
  }

};
export default KontaTableView;