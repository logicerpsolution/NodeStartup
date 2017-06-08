var mongoose = require('mongoose');

var TaskList = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    } ,
    status:{
        type: String,
        required: true,
        default:"INCOMPLETE"
    }
   , created:{
        type: Date,
        required: true,
        default: new Date()
    } 
});

module.exports = mongoose.model('TaskList', TaskList);
