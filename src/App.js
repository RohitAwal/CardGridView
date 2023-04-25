import Card from "./card";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [cardLists, setCardLists] = useState([]);
  const getData = async () => {
    const response = await axios.get(`http://localhost:3000/card_lists`);
    if (response) {
      setCardLists(response.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="grid">
          {cardLists.map((list) => (
            <Card list={list} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
