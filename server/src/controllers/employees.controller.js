const Employee = require('../models/employees')
const employeeCtrl = {}

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()

    res.json(employees)
}

employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.json({message: 'Employee Created'})
}

employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.json(employee)
}

employeeCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({'message': 'Employee updated'})
}

employeeCtrl.deletEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({'message': 'Employee deleted'})
}

module.exports = employeeCtrl