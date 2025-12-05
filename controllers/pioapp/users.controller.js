const UserModel = require('../../models/pioapp/tables/users.model');
const InitVw_users = require('../../models/pioapp/views/vw_users.view');
const initVw_visita_pioapp = require('../../models/pioapp/views/vw_visita_pioapp.view');
const { sequelize } = require('../../configuration/db');
const Vw_visita_pioapp = initVw_visita_pioapp(sequelize);
const vw_supervisores = InitVw_users(sequelize);

vw_supervisores.hasMany(Vw_visita_pioapp, {
    foreignKey: 'codigo_usuario_visita',
    sourceKey: 'codsupervisor'
});
Vw_visita_pioapp.belongsTo(vw_supervisores, {
    foreignKey: 'codigo_usuario_visita',
    targetKey: 'codsupervisor'
});

async function getAllUsers(req, res) {
    try {
        const users = await UserModel.findAll({ raw: true });
        return res.json(users);
    } catch (err) {
        return res.status(500).json({ error: 'Error al obtener los usuarios', details: err.message });
    }
}

async function getAllSupervisors(req, res) {
    try {
        const users = await vw_supervisores.findAll({
            order: [
                ['nomsupervisor', 'ASC']
            ],
            raw: true
        });

        return res.json(users);
    } catch (err) {
        return res.status(500).json({
            error: 'Error al obtener los supervisores',
            details: err.message
        });
    }
}

module.exports = {
    getAllUsers,
    getAllSupervisors
}