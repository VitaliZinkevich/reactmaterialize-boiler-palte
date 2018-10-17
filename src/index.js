import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Input,Dropdown, Button, Navbar, NavItem, Icon, Footer } from 'react-materialize';
import Test from './component'


const App = ({name}) =>{
  return (
    <div className='container appbody'>
        <Navbar brand='logo' right>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>

        <Test>
        

        </Test>

        <Footer copyrights="&copy 2015 Copyright Text"
            moreLinks={
              <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            }
            links={
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            }
            
          >
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
    </div>
  
  

  )
}


ReactDOM.render(
  <App />, document.getElementById('root')
);
