const Forslag = require('../database/models/forslag')
const forslagView = require('../views/forslag')

const getAll = async (req, res) => {
  try {
    const allForslagInDb = await Forslag.find()

    const forslagList = allForslagInDb.map(forslagView.getHtml)

    res.status(200).send(`<div><p>Forslag Overview</p><ul>${forslagList}</ul></div>`)
  } catch(error) {
    console.error(error)
    throw error
  }
}

module.exports = getAll