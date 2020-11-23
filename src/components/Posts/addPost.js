import  React ,{useState , useEffect} from 'react';
import {useSelector} from 'react-redux'
import { Link} from "react-router-dom";
import { Form, Button} from 'react-bootstrap';





function AddPost(props){

    let username=useSelector(item=>item.isLogged.userName);
    let handleInput=props.handleInput;
    let AddNewPost=props.AddNewPost;
    

    


return(
    <div className="d-flex justify-content-center">
          
          { username?
            <Form className="w-100" onSubmit={AddNewPost}>
              <Form.Group>
                <Form.Label>Nема статьи</Form.Label>
                <Form.Control onChange={handleInput} name="title" type="text" onChange={handleInput} placeholder="Введите тему статьи " />
              </Form.Group>
              <Form.Group >
                <Form.Label>Ваша новость</Form.Label>
                <Form.Control as="textarea" name="text" onChange={handleInput} rows={3} placeholder="Что бы вы хотели сказать на данную тему" />
              </Form.Group>
              <Button variant="primary"  type="submit" className="px-5 d-block m-auto">
                отправить
              </Button>
              </Form>
        :
        <Button className="m-3 p-0" ><Link className="px-5" to="/login" >для того чтобы оставлять новости вам необходимо зарегестрироваться</Link></Button>
          }

    </div>
    )
    
}


        
  
  
export default AddPost;