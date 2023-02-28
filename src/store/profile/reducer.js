import { UPDATE_AUTHOR } from "./actions";

const initialState = {
    name: 'Anton'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_AUTHOR:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}

export default profileReducer;