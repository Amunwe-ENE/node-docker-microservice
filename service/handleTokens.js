const jwt = require("jsonwebtoken");

const verify = (req, res, next)  =>{
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401) // if there isn't any token

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET , (err, user) => {
    console.log(err)
    if (err) return res.status(403).json('Auth Token required')
    req.user = user
    next() // pass the execution off to whatever request the client intended
  })
}   
const signToken =  (req, res) => {
  
  const { user_id } = req.params;
  
  if(!user_id) return res.sendStatus(404)
      //if user log in success, generate a JWT token for the user with a secret key
      jwt.sign({user:{user_id}}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' },(err, token) => {
          if(err) { console.log(err); return res.sendStatus(401) }    
          res.send(token);
      });
 
};
module.exports = {
  verify,
  signToken
}