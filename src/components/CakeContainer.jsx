import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { useState } from "react";

const CakeContainer = (props) => {

  const [number,setNumber]=useState(1);
  return (
    <div>
      <h2>Number of Cakes-{props.numOfCakes}</h2>
      <input value={number}  onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    buyCake: (number)=>dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(CakeContainer);
