import React from 'react';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import { withNavigation } from 'react-navigation';

const MyFooter = () => (
  <Footer>
    <FooterTab>
      <Button>
        <Icon name="apps" />
      </Button>
      <Button>
        <Icon name="camera" />
      </Button>
      <Button active>
        <Icon active name="navigate" />
      </Button>
      <Button>
        <Icon name="person" />
      </Button>
    </FooterTab>
  </Footer>
);

export default withNavigation(MyFooter);