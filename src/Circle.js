import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

function Circle(props) {
  return (
    <div className="square">
      <button
        className={props.value ? props.value : "circle"}
        onClick={props.onClick}
      ></button>
    </div>
  );
}



// ReactDOM.render(<App />, document.getElementById('app'));
export default Circle;
