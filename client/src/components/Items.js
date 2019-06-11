import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Card, Header, Button, } from 'semantic-ui-react'

const Items = (props) => {
  const [items, setItems] = useState([])

  useEffect( () => {
    axios.get("/api/items")
      .then ( res => {
        setItems(res.data);
      });
  }, []);

  const renderItems = () => {
      return items.map(item => ( 
        <Card key={item.id}>
          <Card.Content>
           <Card.Header>{item.name}</Card.Header>
            <Card.Description>
             {item.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button as={Link} to={`/item/${item.id}`} color="blue">
              View
            </Button>
            <Button as={Link} to={`/item/${item.id}`} color="red">
              Delete
            </Button>
          </Card.Content>
      </Card> 
      ));
  }

  return(
  
    <div>
      <Header as="h1">Items</Header>
      <br />
      <Button as={Link} to="/items/new" color="blue">
      Add Item
      </Button>
      <br />
      <br />
      <Card.Group>
        { renderItems() }
      </Card.Group>
     </div>
  );
};

export default Items