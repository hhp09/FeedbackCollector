const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;     // only require one property, hence the .Strategy
const keys = require('../config/keys'); 
const mongoose = require('mongoose');   // for model saving purposes

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);    // callback that tells passport that current process has been fulfilled, null refers to no error followed by user details (ID)
});

passport.deserializeUser((id, done) => {
    User.findById(id)        // find the user from Mongo, using the id that is associated with user in the collection in mongo cluster
    .then(user => {
        done(null, user);
    })
    // everytime Mongo is contacted, the process is asynchronous and it always returns a promise that will be resolved after user with given id is found
})

// need to tell Passport to use cookies in order to keep track of the users

passport.use(
    new GoogleStrategy(
       {                                       // passport function, and passing along what strategy needs to be used
           clientID: keys.googleClientID,
           clientSecret: keys.googleClientSecret,
           callbackURL: '/auth/google/callback',
           proxy: true
       }, async (accessToken, refreshToken, profile, done) => {       // using async to hint at asynchronous code below
           const existingUser = await User.findOne({ googleId: profile.id })      // This query returns a promise (a tool to handle asynchronous code in JavaScript)
           
           // <- returns a promise to get some indication when a query has completed, and use .then statement. 
           // Update: assign result of await user to another identical variable name
           
                if(existingUser) {  // to check if existingUser exists, then there already exists a record with given profile ID
                    return done(null, existingUser);  // tell passport that we have finished creating a user and that it should now resume the auth process
                }           
                
                // make a new record for new profile ID
                const user = await new User({ googleId: profile.id }).save()  // takes the model instance and saves it to database   
                done(null, user);
                
           })

       
   );    

