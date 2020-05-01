const initialState = {
    difficulty: ''
}

const DIFFICULTY = 'DIFFICULTY'

export function difficulty(difficulty){
    return {
        type: DIFFICULTY,
        payload: difficulty
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case DIFFICULTY:
            return {...state, difficulty: action.payload}
        default:
            return initialState
    }
}