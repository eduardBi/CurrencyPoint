import  React  from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

import { Link} from "react-router-dom";
import { Form, Button} from 'react-bootstrap';




function AddComment(props){
    
    let handleInput=props.handleInput;
    let AddComent=props.addComent
    let username=useSelector(item=>item.isLogged.userName);
    
return(
    <div  className="d-flex justify-content-center">
          {username?
    
        <Form onSubmit={AddComent} className="w-100">
        <Form.Group>
          <Form.Label>Ваше мнение</Form.Label>
          <Form.Control type="text" onChange={handleInput} name="name" onChange={handleInput} placeholder="Что вы думаете  о данной статье" />
        </Form.Group>
        <Button variant="primary"  type="submit" className="px-5 d-block m-auto my-4">
          отправить
        </Button>
      </Form>:
        <Button className="m-3 p-0" ><Link className="px-5" to="/login" >для того чтобы оставлять новости вам необходимо зарегестрироваться</Link></Button>

          }

    </div>
    )
    
}


        
  
  
export default AddComment;