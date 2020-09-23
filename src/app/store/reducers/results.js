import {type as findResultsType } from '../actions/findResults';
import {defaultState} from '../../../server/defaultState';

const deftState = [];

function reducer(state = deftState, {tasks, type, payload}) {
    switch(type) {
        case findResultsType: {
            const regex = new RegExp(`^${payload}`, 'i');  
    
            return defaultState.tasks.filter(n => regex.test(n.name));
                             
           }
    
        default:
            return state;
    }
}
export default reducer;