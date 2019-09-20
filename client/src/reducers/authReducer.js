import { FETCH_USER } from '../actions/types';

// if action.payload returns an empty string, user is not logged in
// commit bool values for the above

export default function(state=null, action) {           // when header is being refreshed during log in, we set state to null as the log in status has not yet been updated
    console.log(action);
    switch(action.type) {   // Note: don't forget to define types, and state will be undefined
        case FETCH_USER:
            return action.payload || false;  // log in data

        default:
            return state;
    }
}