const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' }));
}

// to redirect user to correct target (Express server and not the client), also fix server line in package.json
// to avoid booting both 3000 and 5000 up