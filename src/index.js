import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, Button, Navbar, NavItem, Icon } from 'react-materialize';
import Test from './component'
const App = ({name}) =>{
  return (
    <div className='container'>
        <Navbar brand='logo' right>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>
        <Test></Test>
    </div>
  
  

  )
}


ReactDOM.render(
  <App />, document.getElementById('root')
);
