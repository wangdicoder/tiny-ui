import React, {Component} from 'react';
import './App.css';
import {IoIosAdd} from 'react-icons/io';
import {Button} from '../../core';

const {Group} = Button;

class App extends Component {
  render() {
    return (
        <div className="App">
          <Button>Default</Button>
          <Button outline color="primary">Default</Button>
          <Button link size="xs" color="pink" round>Primary Button</Button>
          <Button color="blue" round>Info Button</Button>
          <Button color="green">Success Button</Button>
          <Button disabled ripple size="sm" color="pink">Primary Button</Button>
          <Button ripple size="sm" color="yellow" round link dash>Primary Button</Button>
          <Button ripple size="sm" color="yellow" round outline dash>Primary Button</Button>
          <Button ripple color="pink" dash onClick={() => console.log('dasdasd')}>Primary Button</Button>
          <Button size="lg" color="pink" block round>Primary Button</Button>
          <Button color="pink" round outline icon={<IoIosAdd/>}>Primary Button</Button>
          <Button size="lg" color="pink" loading outline disabled>Primary Button</Button>

          <Group ripple>
              <Button>Left</Button>
              <Button dash>Middle</Button>
              <Button>Right</Button>
          </Group>
          <Group ripple color="primary" round>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </Group>
          <Group ripple color="blue" round>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
          </Group>
          <Group ripple color="green">
              <Button disabled>Left</Button>
              <Button>Right</Button>
          </Group>
        </div>
    );
  }
}

export default App;
