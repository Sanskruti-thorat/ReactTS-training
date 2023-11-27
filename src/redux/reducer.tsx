/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore } from "redux";

const count = 0 ;

    const reducer =(state=count,action: any )=>{
     switch(action.type){
    case"INCRE":
    return state + action.payload;

    case"DECRE":
    return state - 1;
    
    
    default:
    return state
  }
    }

    export const store = createStore(reducer)