import  React ,{useState,useEffect} from 'react';
import { Link} from "react-router-dom";
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {Navbar,Nav,NavDropdown,Container,Button} from 'react-bootstrap';








function Navigation(){

    let username=useSelector(item=>item.isLogged.userName);


return(
    <header >
    <Container fluid className="p-0" >
    <Navbar  expand="md">
  <Navbar.Brand><Link to="/">Newstler</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto d-flex align-items-center" as="ul">
      <Nav.Link className="mx-3" as="li" ><Link to="/">последние новости</Link></Nav.Link>
      <NavDropdown className="mx-3 text-center" title="Разделы" as="ul" id="basic-nav-dropdown">
        <NavDropdown.Item as="li" ><Link to="/наука">наука</Link></NavDropdown.Item>
        <NavDropdown.Item as="li" ><Link to="/новости">новости</Link></NavDropdown.Item>
        <NavDropdown.Item as="li" ><Link to="/спорт">спорт</Link></NavDropdown.Item>
      </NavDropdown>
      { username? <Nav.Link className="mx-3"  as="li" ><Button className="p-0"  ><Link className="px-4" to="/login">Выйти из аккаунта</Link></Button></Nav.Link>:
                <Nav.Link className="mx-3"  as="li" ><Button className="p-0"><Link  className="px-4 " to="/login">войти в аккаунт</Link></Button></Nav.Link>
      }
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
</header>
    )
    
}


        
  
  
export default Navigation;