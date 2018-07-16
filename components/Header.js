import React from 'react';
import { Header, Title, Left, Button, Icon, Body, Right } from 'native-base';
import { withNavigation } from 'react-navigation';

class MyHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => {this.props.navigation.toggleDrawer()}}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}

export default withNavigation(MyHeader);