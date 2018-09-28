import React, { Component } from 'react';

import {AppProvider, Page, PageActions, Button} from '@shopify/polaris';
import { Link } from 'react-router-dom';
import Products from '../../Components/Products/Products';
import Product from '../../Components/Product/Product';
import '@shopify/polaris/styles.css';

class ProductsPage extends Component {

  state = {

    products : [
                  [
                  <Link to={{pathname: '/product', state: '1' }}>Emerald Silk Gown</Link>,
                  'This is an amazing Product.',
                  124689,
                  <Link to={{pathname: '/product', state: '1' }}>EDIT</Link>
                  ],

                  [<Link to={{pathname: '/product', state: '1' }}>Mauve Cashmere Scarf</Link>,
                  'This is an amazing Product. You can\'t live without it.',
                   124533,
                   <Button url="http://localhost:3000/product/2">EDIT</Button>
                 ],

                  [
                  <Link to={{pathname: '/product', state: '1' }}>Navy Merino Wool Blazer with khaki chinos and yellow belt</Link>,
                  'This is an amazing Product. You can\'t live without it.',
                  124518,
                  <Button url="http://localhost:3000/product/3">EDIT</Button>
                  ]
                ],
     newProductPage : false,
  }

  componentDidMount(){
    this.fetchData();
  }

  newProductPage(){

    this.setState({
      newProductPage : true
    })
  }

  fetchData(){

    fetch('http://29679ea7.ngrok.io/products')
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log('Parsing Failed.', error))

  }

  render(){

    const { products, newProductPage } = this.state;

    if(newProductPage){
      return (
        <Product></Product>
      );
    }
    else{
    return(
      <AppProvider>
          <Page
            title="Products"
            primaryAction={{content: 'Add Product', disabled: false, onAction : () => this.newProductPage() }}>
                <p>List of all the products</p>
                <br/>
                <Products products={products}/>
          </Page>
      </AppProvider>
    );
  }
  }

}

export default ProductsPage;
