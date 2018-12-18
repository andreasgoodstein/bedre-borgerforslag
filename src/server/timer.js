const { updateForslag } = require('./logic/updateforslag')
const { connect } = require('./database/connect')

const runUpdate = async () => {
    console.log('Running update job')
    
    connect()
    await updateForslag()

    console.log('Finished update')

    process.exit()
}

runUpdate()
