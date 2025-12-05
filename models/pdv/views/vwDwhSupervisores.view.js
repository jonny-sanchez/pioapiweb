const { Model, DataTypes } = require('sequelize');

class vwDwhSupervisores extends Model {}

function initvwDwhSupervisores(sequelizeInstance) {
    vwDwhSupervisores.init({
        CodSupervisor: { type: DataTypes.STRING(12), allowNull: false, primaryKey: true },
        NomSupervisor: { type: DataTypes.STRING(630), allowNull: false },
        NomTda: { type: DataTypes.STRING(512), allowNull: false },
        CodTda: { type: DataTypes.INTEGER, allowNull: false }
    }, {
        sequelize: sequelizeInstance,
        tableName: 'vwDwhSupervisores',
        schema: 'dbo',
        timestamps: false
    })

    return vwDwhSupervisores;
}

module.exports = initvwDwhSupervisores;