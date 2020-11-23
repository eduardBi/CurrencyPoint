import  React  from 'react';
import  HomeScreen  from './components/homeScreen.js';
import OnePost from './components/OnePost/showOnePost.js'
import OneTopic from './components/Posts/oneTopic.js'
import Login from './components/login.js'
import Navi from './components/nav.js'
import {Container,Row,Col , Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from "react-router-dom";
import './main.css'



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App(){
    
    
    
return(
  
            <Router>
              
            <Navi></Navi> 
            <Container>
                  <main>
                
                    <Switch>
                       
                    
                      <Route exact path="/posts/:id" component={OnePost}></Route>   
                      <Route exact path="/" component={HomeScreen}></Route>   
                      <Route exact path="/login" component={Login}></Route>   
                      <Route exact path="/:topics" component={OneTopic}></Route>   
                      
                      

                    </Switch>
                </main>        
                </Container>
            </Router>
            
            
            
    )
    
}
  
  
export default App