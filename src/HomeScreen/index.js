import React from "react";
import Container from '../../components/Container';
import {
  Button,
  Text
} from "native-base";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <Container title={'Home'}>
        <Button
          full
          rounded
          primary
          style={{ marginTop: 10 }}
          onPress={() => this.props.navigation.navigate('Profile')}
        >
          <Text>Goto Profiles</Text>
        </Button>
      </Container>
    );
  }
}