import axios from "axios";

const BACKEND_URL = "http://localhost:3100";

// agregado para AuthorsAndPhrases06
export async function getAllPhrases() {
    const response = await axios.get(`${BACKEND_URL}/authors`);
    console.log('backend response')
    console.log(response)
    return Promise.resolve(response.data);
}

// agregado para AuthorsAndPhrases07
export async function deletePhrase(authorName, phrase) {
    const response = await axios.delete(`${BACKEND_URL}/authors/${authorName}/phrases/${phrase}`);
    console.log('backend response')
    console.log(response)
    return Promise.resolve();
}