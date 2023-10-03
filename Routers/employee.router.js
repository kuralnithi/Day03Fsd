import express from 'express'
import { CreateEmployee, deleteEmployeeById, getAllEmployee, getEmployeeById, updateEmployeeById } from '../Controllers/employee.controller.js';



const router = express.Router();


router.post('/emp/create',CreateEmployee);
router.get('/emp',getAllEmployee);
router.get('/emp/:id',getEmployeeById);
router.put('/emp/edit/:id',updateEmployeeById);
router.delete('/emp/delete/:id',deleteEmployeeById);

export default router