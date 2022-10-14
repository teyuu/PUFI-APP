
const initialState = {
    registeredEmails: []    
  };

function rootReducer(state = initialState, action){
    switch (action.type) {     
        case 'REGISTRO':
          return {
            ...state,
            registeredEmails: action.payload
          };            
        default:
          return state;
      }
}

export default rootReducer;