module.exports = {

    getRuns: async (req, res) => {
        // console.log(req.session.user)
        const db = req.app.get('db')
        const {difficulty, name} = req.query
        // console.log(difficulty, lift_id)

        const filteredRuns = await db.get_runs([difficulty, name])

        res.status(200).send(filteredRuns)
    }
}