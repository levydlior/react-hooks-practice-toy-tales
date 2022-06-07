import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])



  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

function handleFetchedToys(fetchedToys) {
  setToys(fetchedToys)
}

function handleNewToySubmit(newToyObject){
  const updatedToys = [... toys, newToyObject]
  setToys(updatedToys)
}

function handleDonatedToy(id){
  const toysArrayWithoutDeletedToy = toys.filter(toy => toy.id !== id)
  setToys(toysArrayWithoutDeletedToy)
}

function handleLikesUpdate(updatedToy){
  const updatedLikesToy = toys.map(toy => {
    if (updatedToy.id === toy.id){
      return updatedToy
    }else {
      return toy
    }
  })
  setToys(updatedLikesToy)
}

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToySubmit={handleNewToySubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onFetchToys={handleFetchedToys} onDonatedToy={handleDonatedToy} onLikesUpdate={handleLikesUpdate}/>
    </>
  );
}

export default App;
