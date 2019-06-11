import React from 'react';
import axios from 'axios';
import { Button, Header, Segment, } from 'semantic-ui-react';

class ItemView extends React.Component {
  state = { item: {}, };

  componentDidMount(){
    const { id, } = this.props.match.params
    axios.get(`/api/itemss/${id}`)
      .then ( res => {
        this.setState({ item: res.data, })
      });
  };

  render() {
    const { item: { name, description, price,}, } = this.state;

    return (
      <div>
        <Segment>
          <Header as="h1">{name}</Header>
          <Header as="h3">{description}</Header>
          <Header as="h5" color="grey">${price}</Header>
        </Segment>
        <br />
        <br />
        <Button color="black" onClick={this.props.history.goBack}>
          Back
        </Button>
      </div>
    );
  };
};

export default ItemView