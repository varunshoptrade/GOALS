import React, { Component } from 'react';

import {AppProvider, Page, PageActions, Card, DataTable, Link, Button} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

const products = (props) => {

        let rows = props.products;

          return (
              <Card>
                <DataTable
                  columnContentTypes={[
                    'text',
                    'text',
                    'numeric',
                    'text',
                  ]}
                  headings={[
                    'Product',
                    'Description',
                    'Price',
                    ''
                  ]}
                  rows={rows}
                />
              </Card>
          );

};

export default products;
