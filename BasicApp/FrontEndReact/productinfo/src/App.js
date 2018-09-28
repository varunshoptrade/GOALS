import React, { Component } from 'react';

import ProductsPage from './Components/ProductsPage/ProductsPage';
import Product from './Components/Product/Product';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';

import {AppProvider, Page, PageActions, Button} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

class App extends Component {
  render() {

    return (
      <div>
        <BrowserRouter>
          <div>
          <Switch>
            <Route exact path='/' component={ProductsPage}/>
            <Route path='/product' component={Product}/>
            <Route path="/product/:id" component={Product}/>
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
