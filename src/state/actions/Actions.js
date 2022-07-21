import axios from 'axios'

const Apikey = '3368c4de99d69b9fe8d4851a78f021cb'

export const getData = () => {
    return {
        type: 'GET_DATA',
        payload: axios.get(`https://api.themoviedb.org/4/list/1?api_key=${Apikey}`)
    }
}