const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../../configuration/db');

class RolModel extends Model {}

RolModel.init({
    id_rol: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(250), allowNull: false },
    userCreatedAt: { type: DataTypes.BIGINT, allowNull: true },
    userUpdatedAt: { type: DataTypes.BIGINT, allowNull: true },
}, {
    sequelize,
    tableName: 'rol',
    schema: 'app',
    timestamps: true
});

module.exports = RolModel;