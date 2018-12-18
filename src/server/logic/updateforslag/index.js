const ForslagService = require('../../services/forslag')
const Forslag = require('../../database/models/forslag')

const updateForslag = async () => {
  const forslagService = new ForslagService()

  const forslagFromService = await forslagService.getAllActiveForslag()

  const updateTasks = forslagFromService.map((forslag) => ({ 
      updateOne: {
        filter: { externalId: forslag.externalId },
        update: { 
          votes: forslag.votes,
          status: forslag.status,
          title: forslag.title,
          date: forslag.date,
          url: forslag.url
        },
        upsert: true
      } 
    })
  )

  if (updateTasks.length > 0) {
    await Forslag.bulkWrite(updateTasks)
  }
}

module.exports = { updateForslag }