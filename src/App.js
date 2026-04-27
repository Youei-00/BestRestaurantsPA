import React, { useState } from "react";
import CitySelector from "./components/CitySelector";
import TopRestaurants from "./components/TopRestaurants";

function App() {
  const [city, setCity] = useState("Philadelphia");

  return (
    <div style={{ padding: 20 }}>
      <h1>🍽️ CMPSC445Project2 - Best in PA</h1>

      <CitySelector city={city} setCity={setCity} />

      <TopRestaurants city={city} />
    </div>
  );
}

export default App;