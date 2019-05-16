// we'll need axios
import axios from 'axios';


export const FETCH = 'FETCH';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';


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