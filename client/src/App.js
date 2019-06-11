import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Items from './components/Items';
import ItemForm from './components/ItemForm';
import ItemView from './components/ItemView';
import { Container, } from 'semantic-ui-react';


const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/items/new" component={ItemForm} />
        <Route exact path="/items/:id" component={ItemView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;
