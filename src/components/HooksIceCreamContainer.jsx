import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyIceCream } from '../redux';

const HooksIceCreamContainer = () => {
    const numOfIceCream=useSelector(state=>state.iceCream.numOfIceCreams);
    const dispatch=useDispatch();
  return (
    <div>
        <h1>Ice Cream-{numOfIceCream}</h1>
        <button onClick={()=>dispatch(buyIceCream())}>Buy Ice cream</button>
    </div>
  )
}

export default HooksIceCreamContainer