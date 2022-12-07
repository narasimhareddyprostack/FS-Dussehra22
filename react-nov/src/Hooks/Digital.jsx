import React, { useState, useEffect } from "react";

const Digital = () => {
  let [ct, setCT] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setCT(new Date().toLocaleTimeString());
    }, [1000]);
    return () => {
      console.log("At time ununmounting time...");
    };
  }, []);
  return (
    <div>
      <h1>Digital Clock</h1>
      <h3>Time :{ct}</h3>
    </div>
  );
};

export default Digital;
