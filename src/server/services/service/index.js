const fetch = require('node-fetch')

const POST_OPTIONS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    filter: "active",
    sortOrder: "MostVotesFirst",
    searchQuery: "",
    pageNumber: 0,
    pageSize: 1024
  })
}

class Service {
  async post(url) {
    const response = await fetch(url, POST_OPTIONS)
        
    if (response.status !== 200) {
      throw Error(`Response ${response.status}`)
    }
        
    const data = await response.json()

    return data
  }
}

module.exports = Service