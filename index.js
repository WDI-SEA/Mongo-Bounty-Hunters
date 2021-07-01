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

// PUT /bounties/:id
app.put('/bounties/:id', (req, res) => {
    db.Bounty.findById(req.params.id)
    .then(e => {
        e.name = req.body.name
        e.wantedFor = req.body.wantedFor
        e.client = req.body.client
        e.reward = req.body.reward
        e.ship = req.body.ship
        e.hunters = req.body.hunters
        e.captured = req.body.captured
        e.save()
        .then(() => {
            res.redirect('/bounties')
        })
    })
})

// DELETE /bounties/:id
app.delete('/bounties/:id', (req, res) => {
    db.Bounty.findByIdAndDelete(req.params.id)
    .then(deletedBounty => {
        log(deletedBounty)
        res.redirect('/bounties')
    })
    .catch(err => {
        log(err)
    })
})

// LISTEN - - - - - - - - - - - - - - - - -
app.listen(PORT, () => {
    log(`Welcome to Port ${PORT}`)
})