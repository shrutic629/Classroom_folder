const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true
        },
        phone:{
            type:String,
            require:true
        },
        role:{
            type:String,
            require:true,
            enum: ['student', 'teacher', 'admin']
        }
    },
    {timestamps:true,versionKey:false}
);

module.exports = mongoose.model("User",userSchema);
