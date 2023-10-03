import EmployeeModel from "../Models/employee.schema.js"

export const CreateEmployee = async (req,res) => {
    
try {

    const empDetail = new EmployeeModel(req.body);
    await mentorDetails.save();
    console.log(req.body);
    await empDetail.save();

    res.status(200).json([empDetail]);
    

} catch (error) {
    res.status(500).json({ error: "--->>> Error in creating employee" })


}



}




export  const getAllEmployee = async (req, res) => {
    
try {
    
    const Employees=await EmployeeModel.find()
    
    res.status(200).json([Employees]);
    





} catch (error) {
    res.status(500).json({ error: "--->>> Error in getting employee" })


}



}

export  const getEmployeeById = async (req, res) => {
    
try {
    
    const empId = req.params.id;

    const Employees = await EmployeeModel.findById({ empId });


    res.status(200).json(Employees);



} catch (error) {
    res.status(500).json({ error: "--->>> Error in getting employee by iD" })


}



}


export const updateEmployeeById = async (req, res) => {
    

try {
    
    const empId = req.params.id;

    const { FullName, Age, City } = req.body
    
    const Employees = await EmployeeModel.updateOne({_id:empId},{FullName, Age, City });

    if (Employees.matchedCount === 0)
    {
            res.status(200).json({error:"employee id not found"})
    }

    const updatedEmployee = await EmployeeModel.find()
    
            res.status(200).json(updatedEmployee);



} catch (error) {
    res.status(500).json({ error: "--->>> Error in getting employee by iD" })


}



}
  


export   const deleteEmployeeById = async (req, res) => {
    

try {
    
    const empId = req.params.id;

    
    const Employees = await EmployeeModel.deleteOne({_id:empId});

    if (Employees.deletedCount === 0)
    {
            res.status(200).json({error:"employee id not found"})
    }
    const RemainingEmp = await EmployeeModel.find();

            res.status(200).json(RemainingEmp);



} catch (error) {
    res.status(500).json({ error: "--->>> Error in deleting employee by iD" })


}



}