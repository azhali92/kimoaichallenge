import { BASE_URL } from "../constants"

export const getFullAPIURL = (endpoint : string) => {
    return BASE_URL.concat(endpoint)
}