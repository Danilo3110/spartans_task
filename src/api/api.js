import axios from 'axios';

const headers_default = () => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json',
    };
};

export const api_axios = (method, query, data, headers = headers_default()) => {
    return axios({
        method: `${method}`,
        url: `https://api.github.com${query}`,
        data: data,
        headers: headers
    });
};