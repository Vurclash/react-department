import React from 'react';
import axios from 'axios';
import { Form, Header, } from 'semantic-ui-react';

class ItemForm extends React.Component {
  defaultValues = { name: "", price: "", description: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/items", { ...this.state, })
      .then( res => {
        this.props.history.push("/items");
      })
    // this.setState({ name: "", description: "", }) is an optional way for below code 
    this.setState({ ...this.defaultValues, });
  };

  handleChange = (e, { name, value }) => this.setState ({ [name]: value, });

  render() {
    return (
      <div>
        <Header as="h1">New Item</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal"> 
            <Form.Input 
            label="Name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
            />
            <Form.Input 
            label="Description"
            name="description"
            placeholder="Description"
            value={this.state.discription}
            onChange={this.handleChange}
            />

          </Form.Group>
          <Form.Group>
            <Form.Input 
            label="Price"
            name="price"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    );
  };
};

export default ItemForm;