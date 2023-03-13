import React, { useState } from "react";
import "./styles/css/ThreedCard.css";

const data = [
  {
    id: 1,
    photo: "https://dummyimage.com/300x200/000/fff",
    plotArea: 2400,
    totalBuiltupArea: 3590,
    width: 40,
    length: 60,
    buildingType: "Residential",
    style: "Two Storey House",
    estimatedCost: "54 - 61 Lacs"
  },
  {
    id: 2,
    photo: "https://dummyimage.com/300x200/000/fff",
    plotArea: 2500,
    totalBuiltupArea: 3500,
    width: 45,
    length: 65,
    buildingType: "Commercial",
    style: "Modern",
    estimatedCost: "70 - 80 Lacs"
  }
];

const Cards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (id) => {
    setActiveCard(id);
  };

  return (
    <div className="cards-container">
      {data.map((card) => (
        <div
          key={card.id}
          className={`card ${activeCard === card.id ? "active" : ""}`}
          onClick={() => handleClick(card.id)}
        >
          <div className="card-image">
            <img src={card.photo} alt={card.style} />
          </div>
          <div className="card-info">
            <h2>{card.style}</h2>
            <ul>
              <li>Plot Area: {card.plotArea}</li>
              <li>Total Builtup Area: {card.totalBuiltupArea} sqft</li>
              <li>Width: {card.width} ft</li>
              <li>Length: {card.length} ft</li>
              <li>Building Type: {card.buildingType}</li>
              <li>Estimated cost of construction: {card.estimatedCost}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
