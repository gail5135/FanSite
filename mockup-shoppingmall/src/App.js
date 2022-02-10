import React, {useState} from 'react'
import { Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';
import Data from './data.js'
import Detail from './Detail.js';
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom'

function App() {

  let [shoes, setShoes] = useState(Data)
  let [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/detail'>Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path='/'>
          <div className="mt-4 p-5 text-black rounded text-center jumbotron">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>{' '}
            </p>
          </div>

          <div className='container'>
            <div className='row'>
              {
                shoes.map((ele, idx) => {
                  return (
                    <Card shoes={ele} idx={idx} key={ele.id}/>
                  )
                })
              }
            </div>
            <button className='btn btn-primary' onClick={()=>{

              

              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                // setShoes([...shoes, ...result.data])
                setShoes(shoes.concat(result.data))
              })
              .catch((error)=>{
                console.log(error)
              })
            }}>더보기</button>
          </div>
        </Route>

        <Route path='/detail/:id' >
          <Detail shoes={shoes} count={count}/>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.idx+1)+'.jpg'} width='100%' alt='shoes'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

export default App;
