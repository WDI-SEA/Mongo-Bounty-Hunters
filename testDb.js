const db = require('./models')
db.connect()

const drinkCRUD = async () => {
    try {
        // // CREATE
        // const newBounty = await new db.Bounty({
        //     name: "Han Solo",
        //     hunters: ["Boogle", "Groogle"]
        // })
        // await newBounty.save()
        // console.log(`new bounty: ${newBounty}`)

        // // READ
        // const foundBounty = await db.Bounty.findOne({})
        // console.log(`found bounty: ${foundBounty}`)

        // DESTROY
        // const deletedBounty = await db.Bounty.deleteOne({
        //     name: "Han Solo"
        // })
        // console.log(`deleted bounty: ${deletedBounty}`)

    } catch (err) {
        console.log(err)
    }
}

drinkCRUD()