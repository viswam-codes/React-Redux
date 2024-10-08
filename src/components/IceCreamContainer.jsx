import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux'


const IceCreamContainer = (props) => {
  return (
    <div>
        <h1>Num of IceCream-{props.numOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProp=state=>{
    return {
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProp=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(IceCreamContainer)