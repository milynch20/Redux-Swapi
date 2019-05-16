// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH = 'FETCH';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchCharacters = () => dispatch => {
    dispatch ({type: FETCH})
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            console.log('post response', res)
            dispatch({
                type: SUCCESS,
                payload: res.data.results
            })
        })
        .catch(error => {
            dispatch({
                type: ERROR,
                payload: ' character data not found!'
            });
        });
}