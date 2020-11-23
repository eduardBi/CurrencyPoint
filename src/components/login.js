import  React  from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { useState } from 'react';
import {useHistory } from "react-router-dom";
import { Form, Button} from 'react-bootstrap';




function Login(){
    const [loginData, SetLoginData] = useState([]);
    let loginDispatcher=useDispatch();

    let username=useSelector(item=>item.isLogged.userName);

    let history=useHistory();
 
    function SignIn(e){
        e.preventDefault();
        loginDispatcher({type:'signIn',payload:{
            userName:loginData.name,
            age:loginData.age,
            description:loginData.text
        }})
        
        document.querySelector('textarea').value=''

        history.push('/');
        //после успешной авторизации перенаправляю на главную страницу

    }


    function handleInput(e){
        
        SetLoginData({...loginData,[e.target.name]:e.target.value});
        
    }


    function signOut(){
        
        loginDispatcher({type:'signOut',payload:{
        }})
}


return(
    <div className="d-flex justify-content-center"  >
          <img src={require(`../img/news.jpg`).default} className="bg" alt=""/>
        {!username?
       
        <Form className="w-100" onSubmit={SignIn}>
            <Form.Group>
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control type="text" name="name" onChange={handleInput} placeholder="введите своё имя" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Возраст</Form.Label>
              <Form.Control type="number" name="age" onChange={handleInput} placeholder="введите свой возраст" />
            </Form.Group>
            <Form.Group >
              <Form.Label>O себе</Form.Label>
              <Form.Control as="textarea" name="text" onChange={handleInput} rows={3} placeholder="пару слов о себе" />
            </Form.Group>
            <Button variant="primary"  type="submit" className="px-5 d-block m-auto">
              Войти
            </Button>
      </Form>
        : <Button   variant="warning" className="w-25 my-5"  onClick={signOut}>выйти</Button> 
}
    </div>
    )
    
}


        
  
  
export default Login;