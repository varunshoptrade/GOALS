import React, { Component } from 'react';

import {AppProvider, Form, Layout, Checkbox, Card, FormLayout, TextField, Link, Button } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

class ProductForm extends Component {

  state = {
    title: '',
    description: '',
    price: '',
    comparePrice : '',
    chargeTaxes : false,
  };


  render() {
    const {
      title,
      description,
      price,
      comparePrice,
      chargeTaxes,
    } = this.state;

    return (
      <Form noValidate onSubmit={this.handleSubmit}>
        <FormLayout>

          <Card sectioned>
              <TextField
                value={title}
                onChange={this.handleChange('title')}
                label="Title"
                type="text"
              />
              <br/>
              <TextField
                value={description}
                onChange={this.handleChange('description')}
                label="Description"
                type="text"
                multiline={5}
              />
            </Card>

          <Card sectioned>
              <Layout>
                  <Layout.Section secondary>
                    <TextField
                      value={price}
                      onChange={this.handleChange('price')}
                      label="Price"
                      type="number"
                      prefix="$"
                    />
                  </Layout.Section>

                  <Layout.Section secondary>
                    <TextField
                      value={comparePrice}
                      onChange={this.handleChange('comparePrice')}
                      label="Compare at Price"
                      type="number"
                      prefix="$"
                    />
                  </Layout.Section>
              </Layout>
              <br/>
              <Checkbox
                checked={chargeTaxes}
                label="Charge taxes on this product"
                onChange={this.handleChange}
              />
            </Card>

            <hr style={{
              transpare: true,
              borderColor: '#d3d3d3'
            }}/>

            <Layout>
              <Layout.Section>
                <Button destructive>Delete product</Button>
              </Layout.Section>
              <Layout.Section secondary>
                <Button primary submit>Save</Button>
              </Layout.Section>
            </Layout>

        </FormLayout>
      </Form>
    );
  }

  handleSubmit = (event) => {
    this.setState( {title: ''} );
  };

  handleChange = (field) => {
    return (value) => this.setState({[field]: value});
  };
}


export default ProductForm;
