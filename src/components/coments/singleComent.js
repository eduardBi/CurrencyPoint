import  React  from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { Link} from "react-router-dom";
import {Card ,Container, Button ,Row,Col} from 'react-bootstrap';






function SingleComent(props){

    let item=props.data;

return(
    <div >
               <Card>
              <Container>
                <Row className="justify-content-center flex-md-row flex-sm-column">
                <Col md={2} sm={12} className="d-flex justify-content-center align-items-center">
                <Card.Img variant="left"   src={require(`../../img/${item.img}.png`).default} />
                </Col>
                <Col sm={12} md={10}>
                <Card.Body className="position-relative">
                    <Row className="d-flex  align-items-center  justify-content-between ">
                <Col sm={12} md={6} >
                    <Card.Text className="m-0 text-md-left  text-center text-sm-center">
                        {item.senderName}
                    </Card.Text>
                    </Col>
                    <Col sm={12}  md={6}   >
                    <Card.Text className="text-md-right text-center text-sm-center">
                        {item.date}
                    </Card.Text>
                    </Col>
                    </Row>
                    <Card.Title className="text-center my-3">{item.title}</Card.Title>
                    <Col sm={12}>
                    <Card.Text className="text-center my-3 pb-5">
                        {item.senderText}
                    </Card.Text>
                    </Col>
                </Card.Body>
                </Col>
                </Row>
                </Container>
            </Card>
    </div>
    )
    
}


        
  
  
export default SingleComent;