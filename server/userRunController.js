module.exports ={
    savedRuns: async (req, res) => {
        // console.log('timing issue',req.session)
        const db = req.app.get('db')
        const {id} = req.session.user
        const userRuns = await db.get_user_runs([id])
        res.status(200).send(userRuns)
    },

    addRun: async (req, res) => {
        const db = req.app.get('db')
        const {run_id} = req.params
        const {id} = req.session.user
        const {comment} = req.body

        await db.save_user_run([run_id, id, comment])
        // console.log(run_id, id, comment)
        // console.log(req.session)

        const userRuns = await db.get_user_runs([id])
        
        res.status(200).send(userRuns)
        
    },

    editRun: async (req, res) => {
        const db = req.app.get('db')
        const {user_run_join_id} = req.params
        const {comment} = req.body
        const {id} = req.session.user
        console.log(user_run_join_id, comment)

        await db.edit_run([user_run_join_id, comment])

        const userRuns = await db.get_user_runs([id])

        res.status(200).send(userRuns)
        console.log(userRuns)
    },

    deleteRun: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {user_run_join_id} = req.params

        await db.delete_run([user_run_join_id])

        const userRuns = await db.get_user_runs([id])

        res.status(200).send(userRuns)
    }




}