import { WEBSITE_URL } from "../constant";

const getPath = () => {
    let url = window.location.href;
    for (const item of WEBSITE_URL) {
        url = url.replace(item, '')
    }
    return url
}

export default getPath