import {
    TAREAS_PROYECTO
} from '../../types';


export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareas: action.payload
            }

        default:
            return state;
    }
    
}