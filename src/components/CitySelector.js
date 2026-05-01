import React from "react";

function CitySelector({ city, setCity }) {
  return (
    <div>
      <h3>Select City</h3>

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option>Philadelphia</option>
        <option>Bensalem</option>
        <option>West Chester</option>
        <option>Norristown</option>
        <option>Doylestown</option>
        <option>Pottstown</option>
        <option>Media</option>
        <option>Landsdale</option>
        <option>Levittown</option>
        <option>Phoenixville</option>
      </select>
    </div>
  );
}

export default CitySelector;