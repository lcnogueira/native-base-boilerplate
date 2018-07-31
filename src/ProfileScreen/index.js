import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { Form, Item, Input } from "native-base";
import { Alert } from "react-native";

export default class ProfileScreen extends React.Component {
  state = {
    searchInput: ""
  };

  search = () => {
    Alert.alert(
      "Just for testing purposes",
      `You typed: ${this.state.searchInput}`,
      [{ text: "Ok", onPress: () => this.setState({ searchInput: "" }) }]
    );
  };

  render() {
    return (
      <Container title={"Profile"}>
        <Form>
          <Item>
            <Input
              placeholder="Github"
              value={this.state.searchInput}
              name="searchInput"
              onChangeText={searchInput => this.setState({ searchInput })}
            />
          </Item>
          <Button action={this.search}>Search</Button>
        </Form>
      </Container>
    );
  }
}
