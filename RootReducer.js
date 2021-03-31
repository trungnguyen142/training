const initState = []

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                user: action.user
            }
        default: 
            return state
    }
}
export default rootReducer;