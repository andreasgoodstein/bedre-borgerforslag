const Forslag = require('../database/models/forslag')
const forslagUpdater = require('../logic/updateforslag')
const forslagView = require('../views/forslag')

const getAll = async (req, res) => {
  try {
    await forslagUpdater.updateForslag()

    const allForslagInDb = await Forslag.find()

    const forslagList = allForslagInDb.map(forslagView.getHtml)

    res.status(200).send(`<p>Forslag Overview</p><ul>${forslagList}</ul>`)
  } catch(error) {
    console.error(error)
    throw error
  }
}

module.exports = getAll