import React from "react";
import { useState } from "react";

export default function Homepage() {
  const [stock, StockEntered] = useState(""); // right now its empty

  //TODO create a backend route that gets a parameter upon a button clieck 
  const EnteredValue = async () => {  

    if(!stock || !String(stock)){ 
        alert('Please Enter a Valid stock'); 
    } 

    //TODO: Implement the try and catch case here that calls the backend API. 
  }

  return (
    <>
      <h1>Welcome to Practice with req.params, req.query, req.body</h1>
    </>
  );
}
