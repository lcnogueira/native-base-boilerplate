import React from "react";
import Container from '../../components/Container';
import Button from '../../components/Button';
import { Form, Item, Input } from 'native-base';
import List from './List';

export default class ProfileScreen extends React.Component {
  state = {
    searchInput: '',
    list: []
  }

  search = () => {
    this.setState({
      list: [...this.state.list, this.state.searchInput],
      searchInput: ''
    });
  }
  
  render() {
    return (
      <Container title={'Profile'}>
        <Form>
          <Item>
            <Input placeholder="Github" 
              value={this.state.searchInput}
              onChangeText={searchInput => this.setState({searchInput})}
            />
          </Item>
          <Button action={this.search}>
            Search
          </Button>
        </Form>
        <List list={this.state.list}/>
      </Container>
    );
  }
}