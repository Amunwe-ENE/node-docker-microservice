// require mongoose

// define and export the page schecma

// the schema would look similar to this below but depending on wheather we will be
// recieving markdown as a string or not(a file upload instead) we might need to add a content
// property to the schema

// {
//     _id: '',
//     page_name:'',
//     page_owner:''
// }

// export schema


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////  This is the Add-Page Model  //////////////////////////
//  This is the Add-Page Model
const mongoose = require('mongoose');

const AddPageSchema = mongoose.Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
});

const addPageModel = mongoose.model("AddPage", AddPageSchema, "pages");

module.exports = addPageModel;


/*  Line 21, Imports the Mongoose package
*   Lines 23 - 26 creates the Add-Page Model with the "title" and "content" properties.
*   Line 29, Uses the Schema created in Lines 23 - 26 to create the Add-Page Model.
*   Line 30, Exports the Model which can be called anywhere in your App.
* */
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////