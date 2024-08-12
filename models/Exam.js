const mongoose = require('mongoose');
const ExamSchema = new mongoose.Schema({
        batch:{
            type:String
        },
        examName:{
            type:String
        },
        question:[
                {
                    type: mongoose.Schema.ObjectId,
                    ref: 'Question',
                   
                },
            ],
        category:{
            type:String,
            default:"Mix",
            enum:["Fullstack","Frontend","Backend","ReactJs","ExpressJs","NodeJs","MongoDb","Html","Css","Js","Mix"]
        },
        enable:{
            type:"boolean",
            default:true,
        }
},{timestamps:true})
module.exports = mongoose.model('Exam',ExamSchema)