import { type as findCurrentItemType } 
from '../actions/findCurrentItem';

import {defaultState} from '../../../server/defaultState';


const deftState = {};

function reducer(state = deftState, { type, payload}) {
    switch(type) {
        case findCurrentItemType: {
            return defaultState.tasks.find(n => n.id === payload);
        }
        default:
            return state;
    }
}
export default reducer;