const initEmpleadoModel = require('../../models/nomina/empleado.model');
const { sequelizeInit } = require('../../configuration/db');

async function getAllEmpleados(req, res) {
    try {
        const sequelizeNomina = await sequelizeInit('NOMINA');
        const EmpleadoModel = initEmpleadoModel(sequelizeNomina);

        const empleados = await EmpleadoModel.findAll({ raw: true, limit: 10 });
        return res.json(empleados);
    } catch (err) {
        return res.status(500).json({ error: 'Error al obtener los empleados', details: err.message });
    }
}

module.exports = {
    getAllEmpleados
};