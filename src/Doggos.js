import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Container, Row} from 'react-bootstrap';
import Dog from './Dog';

class Doggos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
        };
    }

    getAllDogs = () => {
        const url = 'https://dog.ceo/api/breeds/list/all';
        axios.request(url)
            .then((response, error) => {
                if (!error && response) {
                    console.log(response.data.message);
                    this.setState({dogs: Object.keys(response.data.message)});
                } else {
                    console.log('There was a problem getting all dogs', error);
                }
            })
    }

    renderDogs(dog, index) {
        return (
            <Dog key={index} breed={dog} />
        )
    }

    componentDidMount() {
        this.getAllDogs();
    }

    render() {
        return (
                <Container>
                    <Row xs={6} md={4}>
                    {this.state.dogs.map(this.renderDogs)}
                    </Row>
                </Container>
        )
    }
}


export default Doggos;
