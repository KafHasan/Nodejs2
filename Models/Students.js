const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/crudFormDB');
const studentSchema = new mongoose.Schema({
name: String,
age: Number
});

const Student=mongoose.model('Student',studentSchema);

module.exports=Student;
