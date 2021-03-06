import React from 'react'
import redux from 'redux'
import { createStore } from 'redux'

const initialState={
counter:0,
showCounter:true
}

const reduxCounter=(state=initialState,action)=>{
    if(action.type === 'increment'){
        return{
            counter:state.counter+1,
            showCounter:state.showCounter
        }
    }
    if(action.type === 'decrement'){
        return{
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }
    if(action.type === 'increase'){
        return{
            counter:state.counter+action.value,
            showCounter:state.showCounter
        }
    }
    if(action.type === 'toggle'){
        return{
            
            showCounter:!state.showCounter,
            counter:state.counter,
        }
    }
    return state
}


const store=createStore(reduxCounter)

export default store



