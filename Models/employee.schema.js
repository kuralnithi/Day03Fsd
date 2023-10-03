 import mongoose from "mongoose"

const EmployeeSchema = mongoose.Schema({

    FullName:String,
    Age:String,
    City:String

});

    const EmployeeModel = mongoose.model("EmployeeModel", EmployeeSchema);
    
    


export default EmployeeModel;