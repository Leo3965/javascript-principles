const axios = require('axios')

const URL = `https://swapi.dev/api/people/`

async function getPeople(id) {
    if (id instanceof Number) {
        const url = `${URL}${id}/?format=json`
        const response = await axios.get(url)
        return response.data
    }

    const url = `${URL}?format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports = {getPeople}