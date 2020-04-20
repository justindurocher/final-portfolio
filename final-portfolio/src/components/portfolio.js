import { React, Component } from "react";

import * as Bootstrap from 'react-bootstrap';

import './css/portfolio.css';

class Portfolio extends Component{

    render() {

        <div className="portfolio">

            <div className="port">Portfolio: </div>

            <hr />

            <Bootstrap.Card style={{ width: '18rem' }}>
                <Bootstrap.Card.Img variant="top" src="holder.js/100px180" />
                <Bootstrap.Card.Body>
                <Bootstrap.Card.Title>Video-game News Search App</Bootstrap.Card.Title>
                <Bootstrap.Card.Text>
                        In this application, the user is able to search any video game ever created
                            to see the most recent news atricles on that particular game.
                </Bootstrap.Card.Text>
                    <Bootstrap.Button variant="primary">View</Bootstrap.Button>
                </Bootstrap.Card.Body>
                </Bootstrap.Card>

        </div>

    }

}