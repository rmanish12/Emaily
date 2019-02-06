const stripe = require('stripe')('sk_test_Kki0MZVx1ETYqm5OuZj7j5in')

const requireLogin = require('../middleware/requireLogin')

module.exports = app => {
    app.post('/api/stripes', requireLogin, async (req, res) => {

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Email credits',
            source: req.body.id
        })

        req.user.credits += 5

        const user = await req.user.save()
        res.send(user)
    })
}