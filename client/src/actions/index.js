// action creater generation: initiates change inside of redux side of the application

import axios from 'axios';
import { FETCH_USER } from './types';

// Note: use async/await instead of axios
export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/currentuser');
        dispatch({ type: FETCH_USER, payload: res.data });
    };

export const handleToken = (token) => async dispatch => {       // for stripe API token generation
    const res = await axios.post('/api/stripe', token); // make post request to back end, and store response in res
    
    // action dispatch below
    dispatch({ type: FETCH_USER, payload: res.data });
}; 




