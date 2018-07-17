import React from "react";
import {
  Container,
  Content,
} from "native-base";
import StatusBar from './StatusBar';
import Header from './Header';
import Footer from './Footer';
import { purple } from '../utils/colors';

const MyContainer = ({ children, title }) => (
  <Container>
    <StatusBar backgroundColor={purple} barStyle='light-content' />
    <Header title={title} />
    <Content padder>
      {children}
    </Content>
    <Footer />
  </Container>
);

export default MyContainer;