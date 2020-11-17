import React, { Component } from "react";
import apiResponse from '../api.js'
import DogCard from '../Components/DogCard'
// console.log(apiResponse)

class DogsList extends Component {

  listOfDogs = () => {
    return apiResponse.map(dog => <DogCard key={dog.id} name={dog.name} img={dog.img} breed={dog.breed}/>)
  }

  render() {
    return (
    <div className="list">
      {this.listOfDogs()}
    </div>
    );
  }
}

export default DogsList;
