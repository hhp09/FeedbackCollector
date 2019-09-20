const keys = require('../config/keys'); // access to key via keys in config for stripe require
const stripe = require('stripe')(keys.stripeSecretKey);  

// Stripe token ends up in this request handler
// token gets handled, reach out to Stripe API and finalize actual charge, then update user credits

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {

        if(!req.user) {
            return res.status(401).send({ error: 'Must be logged in!' });
        }

       const charge = await stripe.charges.create({
           amount: 500,
           currency: 'usd',
           description: '$5 for 5 credits',
           source: req.body.id
       });

       req.user.credits += 5;
       const user = await req.user.save();
       res.send(user);
    });
}; 