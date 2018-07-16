import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import { purple } from '../utils/colors';
import MyStatusBar from '../components/MyStatusBar';

const MainContainer = ({children, title}) => (
  <Container>
    <MyStatusBar backgroundColor={purple} barStyle='light-content' />
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>{title} - RU App</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      {children}
    </Content>
    <Footer>
      <FooterTab>
        <Button badge vertical>
          <Badge><Text>2</Text></Badge>
          <Icon name="apps" />
          <Text>Apps</Text>
        </Button>
        <Button vertical>
          <Icon name="camera" />
          <Text>Camera</Text>
        </Button>
        <Button active badge vertical>
          <Badge ><Text>51</Text></Badge>
          <Icon active name="navigate" />
          <Text>Navigate</Text>
        </Button>
        <Button vertical>
          <Icon name="person" />
          <Text>Contact</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);

export default MainContainer;