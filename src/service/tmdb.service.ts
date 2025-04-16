import axios from "axios"

const url='https://api.themoviedb.org/3'
const api='14c9a13e908e0618aa40efca5b305b6a';
const imageTMDB='https://image.tmdb.org/t/p/original';

export const getMoviesBySearchKey = (term:string, page?:number) => {
    
    const type = term ? 'search' : 'discover';
    return axios.get(`${url}/${type}/movie`, {
        params:{
            api_key: api,
            query: term,
            language: 'es-ES',
            page: page
        }
    }).then((response) => {
        return response.data;
    });
}