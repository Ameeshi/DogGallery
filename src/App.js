// import React from 'react';
// import './App.css';
// import axios from 'axios';
// import {Row, Grid} from 'react-bootstrap';
// import Gallery from "react-photo-gallery";
// import { photos } from "./photos";


// const REQUEST_ALL_BREEDS = "REQUEST_ALL_BREEDS"

// //Get list of ALL breeds 
// export const loadAllBreeds = () => {
//   return (dispatch) => {
//     return fetch('https://dog.ceo/api/breeds/list/all')
//       .then(response => response.json())
//       .then(breeds => {
//         dispatch(getAllBreeds(breeds.message))
//       })
//       .catch(error => console.log(error));
//   };
// }


// const getAllBreeds = breeds => {
//   return {
//     type: "REQUEST_ALL_BREEDS",
//     breeds
//   }
// }

// //Get collection of images based on selected Breed
// export const selectBreed = (breedName) => {
//   return (dispatch) => {
//     return fetch(`https://dog.ceo/api/breed/${breedName}/images`)
//       .then(response => response.json())
//       .then(breed => {
//         dispatch(getBreed(breed.message))
//       })
//       .catch(error => console.log(error));
//   };
// }

// const getBreed = breed => {
//   return {
//     type: "REQUEST_BREED_IMAGES",
//     breed
//   }
// }


// function App() {
//   return (
//     <div className="App">
//         <Gallery photos={photos} direction={"column"} />        
//     </div>
//   );
// }

import React, {Component} from 'react';
import './App.css';
import Doggos from './Doggos';
import AppNav from './AppNav';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
        }

    }


    render() {
        return (
            <div>
                <AppNav/>
                <Doggos/>
            </div>
        );
    }
}



export default App;
