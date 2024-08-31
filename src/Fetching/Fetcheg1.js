import { useEffect, useState } from "react";

function Fetcheffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json()) // Return the parsed JSON here
      .then((json) => setData(json.quotes.slice(0, 10))); // This now correctly receives the parsed JSON object
  }, []);

  return (
    <div>
      {data.map((element) => (
        <div key={element.id}>
          <h1>{element.quote}</h1>
        </div>
      ))}
    </div>
  );
}

export default Fetcheffect;
