import React, { createElement } from "react";



function DogCard(props) {

  const barkHandler = () =>{ 
    console.log("Hey!") 
    const h2 = createElement('h2')
    h2.innerText = "Bark"
    document.querySelector('.bark').append(h2)
  }

  console.log(props)
  return (
    <div className="card">
      <span className="content">

        <h2 >{ props.name }</h2>
        <img alt="" src={ props.img } />
      </span>
      <span className="bark">
        <button onClick={ barkHandler } >Bark</button>
      </span>
    </div>
  );
}

export default DogCard;
