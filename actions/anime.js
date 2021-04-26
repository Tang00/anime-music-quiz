import { FETCH_ANIME_PENDING, FETCH_ANIME_SUCCESS, FETCH_ANIME_ERROR } from '../constants';

export const fetchAnime = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ANIME_PENDING });

        await fetch('https://api.jikan.moe/v3/top/anime/1/tv')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.top);
            return dispatch({ type: FETCH_ANIME_SUCCESS, payload: data.top});
        })
        .catch((error) => dispatch({ type: FETCH_ANIME_ERROR, payload: error}))
    }
};