import React from "react";
import Container from '../../components/Container';
import {
  Button,
  Text,
  Form,
  Item,
  Input
} from 'native-base';

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
        </Form>
        <Button
          full
          rounded
          primary
          style={{ marginTop: 10 }}
          onPress={() => this.props.navigation.navigate('Profile')}
        >
          <Text>Login</Text>
        </Button>
      </Container>
    );
  }
}