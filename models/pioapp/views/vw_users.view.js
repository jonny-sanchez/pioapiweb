const { Model, DataTypes } = require('sequelize');

class vw_supervisores extends Model {}

function initVw_supervisores(sequelizeInstance) {
    vw_supervisores.init({
        codsupervisor: { type: DataTypes.STRING(12), allowNull: false, primaryKey: true },
        nomsupervisor: { type: DataTypes.STRING(630), allowNull: false }
    }, {
        sequelize: sequelizeInstance,
        tableName: 'vw_supervisores',
        schema: 'web',
        timestamps: false
    })
    return vw_supervisores;
}

module.exports = initVw_supervisores;