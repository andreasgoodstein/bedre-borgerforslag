const Service = require('../service')

const FORSLAG_URL = 'https://www.borgerforslag.dk/api/proposals/search'

class ForslagService extends Service {
  async getAllActiveForslag() {
    const forslag = await this.post(FORSLAG_URL)

    return forslag.data || []
  }
}

module.exports = ForslagService