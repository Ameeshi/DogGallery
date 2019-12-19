import React, {Component} from 'react';
import axios from 'axios';
import {Col, Button} from 'react-bootstrap';

class Dog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            name: props.breed
        }
    }

    getImage() {
        const url = `https://dog.ceo/api/breed/${this.props.breed}/images`
        axios.get(url)
            .then((response, error) => {
                if (!error && response) {
                    this.setState({image: response.data.message[0]})
                } else {
                    console.log('There was an error', error)
                }
            })

    }

    componentDidMount() {
        this.getImage()
    }

    render() {
        return (
            <div>
                <Col xs={6} md={4}>
                    <img src={this.state.image} alt="dog" style={{'maxHeight':'100px'}}/>
                </Col>
            </div>
        )
    }

}

export default Dog;