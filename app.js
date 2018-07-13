var express = require("express");

var app =express();
app.use(express.static('static'));
/*const {google} = require('googleapis');

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("447098100789-kqupm7m5u8uvf5sevr5efnvuitp6m9hm.apps.googleusercontent.com");
async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: Token, //need to get token from the client side
        audience:"447098100789-kqupm7m5u8uvf5sevr5efnvuitp6m9hm.apps.googleusercontent.com"  // Specify the CLIENT_ID of the app that accesses the backend

    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];

}

verify().catch(console.error);
*/
//for authenication ^
app.listen(3000, () => console.log('App listening on port 3000!'));