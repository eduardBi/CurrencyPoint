import React from 'react';
import { Link} from "react-router-dom";
import {Card ,Container, Button ,Row,Col} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const SinglePost = (props) => {

        let item=props.data;
        let linkPath=useHistory().location.pathname;
        let pieces=linkPath.split('/');
        

    return (
        <div>
            <Card>
              <Container>
                <Row className="justify-content-center flex-md-row flex-sm-column">
                <Col md={2} sm={12} className="d-flex justify-content-center align-items-center">
                <Card.Img variant="left"   src={require(`../../../src/img/${item.topic}-${item.img}.jpg`).default} />
                </Col>
                <Col sm={12} md={10}>
                <Card.Body className="position-relative">
                    <Row className="d-flex  align-items-center  justify-content-between ">
                <Col sm={12} md={6}   >
                    <Card.Text className="m-0 text-center text-md-left  text-sm-center">
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
                    {
                        pieces.length<=2?<Col className="d-flex  position-absolute fixed-bottom justify-content-center   m-3 ">
                        <Button variant="primary p-0"><Link  className="px-5" to={`/posts/${item.id}`}>развенуть</Link></Button>
                        </Col>:<Col className="d-flex  position-absolute fixed-bottom justify-content-center   m-3 ">
                        <Button variant="primary p-0 "><Link className="px-3" to={`/${item.topic}`}>Вернуться к разделу</Link></Button>
                        </Col>
                    }
                        
                </Card.Body>
                </Col>
                </Row>
                </Container>
            </Card>
        </div>
    );
}

export default SinglePost;
 