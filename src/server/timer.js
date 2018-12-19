const { updateForslag } = require('./logic/updateforslag')
const { connect } = require('./database/connect')

const runUpdate = async () => {
    try {
        console.log('Running update job')
        
        connect()
        await updateForslag()

        console.log('Finished update')

        process.exit()  
    } 
    catch (error) {
        console.error(error)
        process.exit()
    }
}

runUpdate()  
