import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Augustino Przygocki',
      headerLinks: [
        { title: 'Home', path: '/' },        
        { title: 'About', path: '/about' },       
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Be Unstoppable',
        subtitle: 'Projects that create possibility',
        text: 'Explore my projects below',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s Connect',
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p=5" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Augustino Przygocki</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </Container>
       
      </Router>
    );
  }
}
export default App;