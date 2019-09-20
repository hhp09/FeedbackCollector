const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {       // Route handle: authenticate the user coming from route in arg1, 
            scope: ['profile', 'email']                             // and use the google strategy linked to passport.use function.
        })                                                          // scope specifies what access we want from user account 
    );
    
    // Route handler that now deals with bringing user back to website with the code in URL
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {                     // for incoming request, redirect the user who made the request off to next route
            res.redirect('/surveys');
        }
    ); 

    // Whenever an authenticated user makes a get request to the URL below, log them out
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    // This route is to check if authentication has succeeded or nota
    app.get('/api/currentuser', (req, res) => {      // '' has api route, req refers to incoming request, res refers to outgoing response
        res.send(req.user);
    });
};

