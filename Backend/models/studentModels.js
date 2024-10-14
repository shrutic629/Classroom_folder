const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        phone:{
            type:String,
            require:true
        },
        address:{
            type:String,
            require:true
        },
        qualification:{
            type:String,
            require:true
        },
        fees:{
            type:Number,
            require:true
        },
        gender:{
            type:String,
            require:true
        },
        rollNo:{
            type:Number,
            require:true
        },
        batch:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
            require:true
        },
        joiningDate:{
            type:Date,
            require:true
        },
        
    },
    {timestamps:true,versionKey:false}
);

module.exports = mongoose.model("Student",studentSchema);