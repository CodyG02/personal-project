module.exports ={
    savedRuns: async (req, res) => {
        const db = req.app.get('db')
        const userRuns = await db.get_user_runs()

        res.status(200).send(userRuns)
    },

    addRun: async (req, res) => {
        const db = req.app.get('db')
        const {run_id} = req.params
        const {id} = req.session.user
        const {comment} = req.body

        await db.save_user_run([run_id, id, comment])
        console.log(run_id, id, comment)
        console.log(req.session)

        const userRuns = await db.get_user_runs()
        
        res.status(200).send(userRuns)

    },

    editRun: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {comment} = req.body

        await db.edit_run([id, comment])

        const userRuns = await db.get_user_runs()

        res.status(200).send(userRuns)
    },

    deleteRun: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        await db.delete_run([id])

        const userRuns = await db.get_user_runs()

        res.status(200).send(userRuns)
    }




}