var mongoose=require('mongoose')
var Schema =mongoose.Schema;

var Task = new Schema ({
    Title:{
        type:String,
        required:true
    },
    Theme:{
        type:String,
        //required:true
    },
    CreationDate:{
        type:Date,
        default:Date.now,
    },
    questionTitle:{
        type:String,
        required:true
    },
    QuestionFile:{
        type:String,
        //required:true
    },
    QuestionResponseFile:{
        type:String,
        //required:true
    },
    listStudents : {
        type : [Object],

    },
    class :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Class'
    },
    creator :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'users'

    }




})

module.exports = mongoose.model('Task',Task);