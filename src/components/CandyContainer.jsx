import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCandy } from '../redux';

const CandyContainer = () => {
    const numOfCandies=useSelector(state=>state.candy.numOfCandies);
    const dispatch=useDispatch();
  return (
    <div>
        <h1>Candies-{numOfCandies}</h1>
        <button onClick={()=>dispatch(buyCandy())}>Buy Candies</button>
    </div>
  )
}

export default CandyContainer