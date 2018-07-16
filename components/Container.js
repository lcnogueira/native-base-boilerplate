import React from "react";
import { StatusBar } from "react-native";
import {
  Container,
  Content,
} from "native-base";
import MyStatusBar from './MyStatusBar';
import Header from './Header';
import Footer from './Footer';
import { purple } from '../utils/colors';

const MyContainer = ({ children, title }) => (
  <Container>
    <MyStatusBar backgroundColor={purple} barStyle='light-content' />
    <Header title={title} />
    <Content padder>
      {children}
    </Content>
    <Footer />
  </Container>
);

export default MyContainer;