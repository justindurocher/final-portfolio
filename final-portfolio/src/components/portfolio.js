import  React, {Component} from "react";

import {Card, Button} from 'react-bootstrap';

class portfolio extends Component{

    render() {

        return(

                
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Video-game News Search App</Card.Title>
            <Card.Text>
                    In this application, the user is able to search any video game ever created
                        to see the most recent news atricles on that particular game.
            </Card.Text>
                <Button variant="primary">View</Button>
            </Card.Body>
            </Card>

       

        )

        }

}

export default portfolio;