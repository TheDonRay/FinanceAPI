import React from "react";
import { useState } from "react";

export default function HomePage() {
  // first off we are going to call the api from the backend here as such and use req.params, req.query, req.body to help with this

  const [Value, NewValue] = useState(0);

  //send the request to the backend through  a button click as such
  const SendValue = async () => {
    // going to wrap this in a try and catch here as such
    try {
      const DataFetch = await fetch(`http://localhost:4500/api/${Value}`, { 
        method: 'POST', 
        headers: { 
            "Content-Type": "application/json",
        }, 
      });
      const Response = await DataFetch.json();
      console.log("data recieved", Response);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      <h1>Welcome to your Finances</h1>
      <input
        type="text"
        placeholder="Enter your account balance"
        value={Value}
        onChange={(e) => NewValue(e.target.value)}
      />  
      <button onClick={SendValue}>Click</button>
    </>
  );
}
