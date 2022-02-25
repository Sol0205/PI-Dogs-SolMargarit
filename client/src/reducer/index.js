const initialState = {
    dogs: []
}

function rootReducer(state = initialState, temperament) {
    switch(temperament.type) {
        case 'GET_DOGS':
            return{
                ...state,
                dogs: temperament.payload
            }
        default: return state
    }
}

export default rootReducer