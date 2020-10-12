const postsReducer=(state=[],action)=>{
    switch( state,action.type)
    {
        case 'SET_POST':{
            console.log("reducers",action.payload)
            return state.concat(action.payload)
        }
       default:{
           return [...state]
       }
    }
}
export default postsReducer