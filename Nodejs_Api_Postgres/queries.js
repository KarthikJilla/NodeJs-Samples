const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Nodejs_Api_DB',
  password: 'password',
  port: 5432,
})

const getEmployees = (request, response) => {
    pool.query('SELECT * FROM Employee ORDER BY emp_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getEmployeeById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM Employee WHERE emp_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createEmployee = (request, response) => {
    const { name } = request.body
  
    pool.query('INSERT INTO Employee (emp_name) VALUES ($1)', [name], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Employee added with ID: ${result.id}`)
    })
  }

  const updateEmployee = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body
  
    pool.query(
      'UPDATE Employee SET emp_name = $1 WHERE emp_id = $2',
      [name, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Employee modified with ID: ${id}`)
      }
    )
  }

  const deleteEmployee = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM Employee WHERE emp_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Employee deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
  }