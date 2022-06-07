import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ onFetchToys, toys, onDonatedToy, onLikesUpdate }) {
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toys) => onFetchToys(toys));
  }, []);

  const toysList = toys.map((toy) => {
    return (
      <ToyCard
        toys={toy}
        key={toy.id}
        onDonatedToy={onDonatedToy}
        onLikesUpdate={onLikesUpdate}
      />
    );
  });

  return <div id="toy-collection">{toysList}</div>;
}

export default ToyContainer;
