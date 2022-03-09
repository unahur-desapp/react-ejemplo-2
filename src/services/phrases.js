import axios from "axios";

const BACKEND_URL = "http://localhost:3100";

// agregado para JustPhrases02
export async function getAllPhrases() {
    const response = await axios.get(`${BACKEND_URL}/phrases`);
    return Promise.resolve(response.data);
}

// agregado para JustPhrases03
export async function deletePhrase(phrase) {
    const response = await axios.delete(`${BACKEND_URL}/phrases/${phrase}`);
    return Promise.resolve(response.data);
}

// agregado para JustPhrases04
export async function addPhrase(phrase) {
    const response = await axios.post(`${BACKEND_URL}/phrases/${phrase}`);
    return Promise.resolve(response.data);
}
