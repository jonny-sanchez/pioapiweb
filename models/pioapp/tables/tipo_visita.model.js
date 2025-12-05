const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../configuration/db');

class TipoVisitaModel extends Model {}

TipoVisitaModel.init({
    id_tipo_visita: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(100), allowNull: false },
    userCreatedAt: { type: DataTypes.BIGINT, allowNull: true },
    userUpdatedAt: { type: DataTypes.BIGINT, allowNull: true },
}, {
    sequelize,
    tableName: 'tipo_visita',
    schema: 'app',
    timestamps: true
});

module.exports = TipoVisitaModel;