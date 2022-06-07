import React, { useState } from "react";

function ToyForm({ onNewToySubmit }) {
  const [newForm, setNewForm] = useState({
    image: "",
    name: "",
    likes: 0
  });

  function handleCHange(e) {
    const target = e.target.name;
    const value = e.target.value;
    const updatedForm = { ...newForm, [target]: value };
    setNewForm(updatedForm);
  }

  function handleSubmit(e){
    e.preventDefault()
    const resetForm = {
      image: "",
      name: "",
      likes: 0
    }
    setNewForm(resetForm)
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newForm)
    }).then(r => r.json())
      .then(newToyObject => onNewToySubmit(newToyObject))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newForm.name}
          onChange={handleCHange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newForm.image}
          onChange={handleCHange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
