import React, { useEffect, useState } from "react";
import axios from "axios";

function TopRestaurants({ city }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/top?city=" + city)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [city]);

  return (
    <div>
      <h2>Top Restaurants in {city}</h2>

      {data.map((item, i) => (
        <div
          key={i}
          style={{
            border: "1px solid gray",
            margin: 10,
            padding: 10
          }}
        >
          <h3>{item.name}</h3>
          <p>City: {item.city}</p>
          <p>Stars: {item.stars}</p>
          <p>Reviews: {item.review_count}</p>
          <p>Score: {item.score.toFixed(3)}</p>
        </div>
      ))}
    </div>
  );
}

export default TopRestaurants;