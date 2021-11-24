import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []); //Adding this empty list stops repeated call to backend

  return (
    <div>
      <h1>Check</h1>
      <h2>
        {typeof data.members === "undefined" ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => <p key={i}>{member}</p>)
        )}
      </h2>
    </div>
  );
}

export default App;
