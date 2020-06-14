process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
});
// require mongoose
// define and export the page schecma
const mongoose = require('mongoose');
//mongoose.set('bufferCommands', false);
mongoose.connect(process.env.MONGODB_URL,  {useNewUrlParser: true, useUnifiedTopology: true});

var pageSchema = new mongoose.Schema({
    
    title:String,
    url: String,
    users:[
      {account_id: String,
      permission:{ 
        type: String, 
        enum: ['OO', 'AA', 'VV'], 
        default: 'OO' 
       },
      }
    ],
    markdown: String
  });

const Page = mongoose.model('Page', pageSchema);


module.exports= Page;


