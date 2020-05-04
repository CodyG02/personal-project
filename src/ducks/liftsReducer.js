const initialState = {
    lift: ''
}

const LIFT = 'LIFT'

export function liftName(lift){
    return {
        type: LIFT,
        payload: lift
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case LIFT:
            return {...state, lift: action.payload}
        default:
            return state
    }
}