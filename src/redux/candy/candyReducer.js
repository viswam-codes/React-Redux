
import { BUY_CANDY } from "./candyType"

const initialState={
    numOfCandies:10
}


const candyReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CANDY:return{
            numOfCandies:state.numOfCandies-1
        }
        default:return state
    }
}


export default candyReducer