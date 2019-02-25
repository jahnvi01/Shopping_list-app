var initialState={
 
     items:[
     ]

}
const rootReducer=(state=initialState,action)=>{

switch(action.type){

    case "get":
    return {...state,items:action.payload}
     ;
    
    case "add":
    return {...state,items:[action.payload,...state.items]};
    case "remove":
    return {...state,
        items:state.items.filter(item=>item.id!==action.payload)    
    };
    default:
return state;
}

}
export default rootReducer;