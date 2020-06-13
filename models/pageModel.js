// require mongoose

// define and export the page schecma
const mongoose = require('mongoose');
//mongoose.set('bufferCommands', false);
mongoose.connect(process.env.MONGODB_URL,  {useNewUrlParser: true, useUnifiedTopology: true});

var pageSchema = new mongoose.Schema({
    
    title:String,
    url: String,
    users:[
      {user_id: String,
      permission:{type:String, default: 'OO'}
      }
    ],
    markdown: String
  });

const Page = mongoose.model('Page', pageSchema);


module.exports= Page;


