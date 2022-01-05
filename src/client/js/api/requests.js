import axiosInstance from "./axiosInstance";
import "babel-polyfill";

function makeRequest(endpoint, params) {
    return new Promise((resolve, reject) => {
        axiosInstance.get(endpoint, {
            params
        }).then(
            (res) => {
                resolve(res.data);
            }
        ).catch(e => reject(e));


    });
}

export function getProcessedArticle(url) {
    return makeRequest(
        '/processed',
        { url },
    )
}

export function getTestRequest(url) {
    return makeRequest(
        '/test',
    )
}