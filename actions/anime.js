import { FETCH_ANIME_PENDING, FETCH_ANIME_SUCCESS, FETCH_ANIME_ERROR } from '../constants';

export const fetchAnime = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ANIME_PENDING });

        //await fetch('https://api.jikan.moe/v3/top/anime/1/tv')
        await fetch('https://api.jikan.moe/v3/user/tang1/animelist')
        .then((response) => response.json())
        .then((data) => {
            return dispatch({ type: FETCH_ANIME_SUCCESS, payload: data.anime});
        })
        .catch((error) => dispatch({ type: FETCH_ANIME_ERROR, payload: error}))
    }
};