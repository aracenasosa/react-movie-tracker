import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

export const searchMovies = async ( search, currentPage ) => 
{

    if( search.trim() === '' ) 
    {
        const { data } = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${ API_KEY }&page=${ currentPage }`);
        return data;
    }  
    else 
    {
        const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${ API_KEY }&language=en-US&query=${ search }&page=${ currentPage }&include_adult=false`);
        return data;
    }
    
   
};

export const searchById = async id => 
{
    const { data } = await axios.get(`${BASE_URL}/movie/${ id }?api_key=${ API_KEY }`);
    return data;
};

export const Credits = async id => 
{
    const { data } = await axios.get(`${BASE_URL}/movie/${ id }/credits?api_key=${ API_KEY }`);
    return data;
};

export const Keywords = async ( id ) => 
{
    const { data: { keywords } } = await axios.get(`${BASE_URL}/movie/${ id }/keywords?api_key=${ API_KEY }`);
    return keywords;
};

export const Comments = async id => 
{
    const { data: { results } } = await axios.get(`${BASE_URL}/movie/${ id }/reviews?api_key=${ API_KEY }&language=en-US&page=1`);
    return results;
};

export const People = async id => 
{
    const { data } = await axios.get(`${BASE_URL}/person/${ id }?api_key=${ API_KEY }&language=en-US`);
    return data;
};

export const Recommendations = async id => 
{
    const { data: { results } } = await axios.get(`${BASE_URL}/movie/${ id }/recommendations?api_key=${ API_KEY }&page=1`);
    return results;
};

export const MovieCredits = async id => 
{
    const { data: { cast } } = await axios.get(`${BASE_URL}/person/${ id }/combined_credits?api_key=${ API_KEY }&language=en-US`);
    return cast;
};

export const SocialNetworks = async id => 
{
    const { data } = await axios.get(`${BASE_URL}/person/${ id }/external_ids?api_key=${ API_KEY }&language=en-US`);
    return data;
};

export const Videos = async id => 
{
    const { data: { results } } = await axios.get(`${BASE_URL}/movie/${ id }/videos?api_key=${ API_KEY }&language=en-US`);
    return results;
};