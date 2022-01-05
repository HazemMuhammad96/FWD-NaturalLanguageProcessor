import { getProcessedArticle } from "./api/requests";
import isValidUrl from "./checkURL";
import "babel-polyfill";


export default function handleSubmit(url, onSucess, onFailure) {

    if (url.length === 0) onFailure?.("Please enter a URL");

    if (!isValidUrl(url)) {
        onFailure?.("Please enter a valid URL");
        return;
    }

    getProcessedArticle(url)
        .then(res => onSucess(res))
        .catch(err => onFailure?.(err))

}