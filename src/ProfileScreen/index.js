import React from "react";
import Container from '../../components/Container';
import {
  Button,
  Text
} from "native-base";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <Container title={'Profile'}>
        <Button
          full
          rounded
          primary
          style={{ marginTop: 10 }}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text>Goto Home</Text>
        </Button>
      </Container>
    );
  }
}