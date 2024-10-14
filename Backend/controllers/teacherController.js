const Teacher = require('../models/teacherModels.js');

exports.createteacher = async(req,res)=>{
    const data = req.body;
    const { email } = data;
    const existingteacher = await Teacher.findOne({email});
    if(existingteacher){
        res.status(400).json({message:'teacher already exist'})
    }
    const teacher = new Teacher(data);
    await teacher.save();
    res.status(200).json(teacher);
};

exports.getallteachers = async(req,res)=>{
    const teacher = await Teacher.find();
    res.status(200).json(teacher);
}

exports.getsingleteacher = async(req,res)=>{
    const id = req.params.id;
    const teacher = await Teacher.findById(id);
    res.status(200).json(teacher);
}

exports.updateteacher = async(req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const teacher = await Teacher.findByIdAndUpdate(id,data);
    res.status(200).json(teacher);
}

exports.deleteteacher = async(req,res)=>{
    const id = req.params.id;
    const teacher = await Teacher.findByIdAndDelete(id);
    res.status(200).json(teacher);
}
