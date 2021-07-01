// MODULE SETUP - - - - - - - - - - - - - - - - -
const express = require('express')
const app = express()

const db = require('./models')
db.connect()

app.use(express.urlencoded({ extended: false }))

const PORT = 3000
const log = console.log

// ROUTES - - - - - - - - - - - - - - - - -
// INDEX /
app.get('/', (req, res) => {
    res.json({ msg: "Ey yo, fool." })
})

// POST /bounties
app.post('/bounties', (req, res) => {
    db.Bounty.create({
        name: req.body.name,
        wantedFor: req.body.wantedFor,
        client: req.body.client,
        reward: req.body.reward,
        ship: req.body.ship,
        hunters: req.body.hunters,
        captured: req.body.captured
    })
    .then(() => {
        res.redirect('/bounties')
    })
    .catch(err => {
        log(err)
    })
})

// GET /bounties
app.get('/bounties', (req, res) => {
    db.Bounty.find({})
    .then((result) => {
        res.json(result)
    })
    .catch(err => {
        log(err)
    })
})



// LISTEN - - - - - - - - - - - - - - - - -
app.listen(PORT, () => {
    log(`Welcome to Port ${PORT}`)
})