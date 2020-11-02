const { Router } = require('express')
const router = Router()

const employeeCtrl = require('../controllers/employees.controller')

router.get('/', employeeCtrl.getEmployees)
router.post('/', employeeCtrl.createEmployee)
router.get('/:id', employeeCtrl.getEmployee)
router.put('/:id', employeeCtrl.editEmployee)
router.delete('/:id', employeeCtrl.deletEmployee)

module.exports = router