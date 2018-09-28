import React from 'react';
import ProductForm from '../ProductForm/ProductForm';

import { AppProvider, Page, PageActions, Button } from '@shopify/polaris';
import '@shopify/polaris/styles.css';


const product = (props) =>{
  return (
    <AppProvider>
        <Page
          title="Product"
          primaryAction={{content: 'Save', disabled: false}}>
              <p>Edit the Product and Save.</p>
              <br/><br/>
              <ProductForm/>
        </Page>
    </AppProvider>
  );
}

export default product;
