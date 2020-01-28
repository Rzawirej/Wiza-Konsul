import React from 'react';
import {Form, Button, Segment, Header, List} from 'semantic-ui-react'
const RaportyWorkPlaceView = (props) => {
    const {
        handleSubmit,
        handleChange,
        raport,
        generated
    } = props;

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field inline control='select' name="okresCzasu" onChange={handleChange}>
                        <option value='15Minut'>15 minut</option>
                        <option value='Godzina' selected="selected">1 godzina</option>
                        <option value='Dzień'>1 dzień</option>
                        <option value='Tydzień'>1 tydzień</option>
                    </Form.Field>
                    <Button type="submit" value="Generuj" >Generuj</Button>
                </Form.Group>
            </Form>
            {generated ?
            <Segment textAlign="left">
                 <Header as='h2' textAlign='center'>Raport o przesyłkach z {raport.okresCzasu}</Header>
                 <List >
                    <List.Item>
                        Placówka 1:
                        <List.List>
                            <List.Item>Ilość przesyłek: 24</List.Item>
                            <List.Item>Minimalna wielkość przesyłki: 2</List.Item>
                            <List.Item>Średnia wielkość przesyłki: 5,67</List.Item>
                            <List.Item>Maksymalna wielkość przesyłki: 23</List.Item>
                        </List.List>
                    </List.Item>
                </List>
            </Segment>
           : <> </>}
        </>
        
    );
    
};
export default RaportyWorkPlaceView;