import React from "react";
import Container from '../../components/Container';
import Button from '../../components/Button';
import { Form, Item, Input } from 'native-base';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <Container title={'Home'}>
        <Form>
          <Item>
            <Input placeholder="Github" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
          <Button action={() => this.props.navigation.navigate('Profile')}>
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}