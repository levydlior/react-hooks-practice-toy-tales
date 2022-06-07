import React from "react";

function ToyCard({ toys, onDonatedToy, onLikesUpdate }) {
  const { id, name, image, likes } = toys;

  function handleClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then(onDonatedToy(id));
  }

  function handleLikeClick() {
    const newLikes = parseInt(likes) + 1;
    console.log(newLikes);
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        likes: newLikes,
      })
    }).then(r => r.json())
    .then(updatedToy => onLikesUpdate(updatedToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} key={id} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
