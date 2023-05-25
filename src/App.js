import React from "react";
import "./App.css";
import Form from "./components/Form";
import Gif from "./Assets/images/doc.gif";

const App = () => {
  return (
    <div className="main">
      <div className="left">
        <div className="img">
          <img src={Gif} alt="" srcset="" />
        </div>
        <div className="logo">FORM</div>
      </div>
      <Form />
    </div>
  );
};

export default App;
