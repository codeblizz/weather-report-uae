import React, { Component } from 'react';
import './App.css';
//import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/flatly/bootstrap.css";
//import "bootswatch/journal/bootstrap.css";
import { NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import WeatherDisplay from './WeatherDisplay';

const PLACES = [
    { name: "Abu Dhabi", zip: "80202" },
    { name: "Dubai", zip: "94303" },
    { name: "Sharjah", zip: "94088" },
    { name: "Ajman", zip: "95062" },
    { name: "Ras Al Khaimah", zip: "96803" }
];

class App extends Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0,
        };
    }
    render() {
        const activePlace = this.state.activePlace;
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={4} sm={4}>
                            <h3>Select a city</h3>
                            <Nav
                                bsStyle="pills"
                                stacked
                                activeKey={activePlace}
                                onSelect={index => {
                                    this.setState({ activePlace: index });
                                }}
                            >
                                {PLACES.map((place, index) => (
                                    <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} sm={8}>
                            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;