import {type as findSuggestionsType } from '../actions/findSuggestions';
import {defaultState} from '../../../server/defaultState';


const deftState = [];


function reducer(state = deftState, {tasks, type, payload}) {
    switch(type) {
       case findSuggestionsType: {
        const regex = new RegExp(`^${payload}`, 'i');  

        return defaultState.tasks.filter(n => regex.test(n.name));
                         
       }

        default:
            return state;
    }
}
export default reducer;