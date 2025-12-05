const initTiendaModulo = require('../../models/pdv/views/vwTiendasModulo.view');
const { sequelizeInit } = require('../../configuration/db');
const { Op } = require('sequelize')

async function getAllTiendas(req, res) {
    const { cod_tienda } = req.params;
    console.log(cod_tienda)
    try {
        const sequelizePDV = await sequelizeInit('PDV');
        const TiendaModuloModel = initTiendaModulo(sequelizePDV);
        const tiendas = await TiendaModuloModel.findAll({
            attributes: [
                'id_tienda',
                'codigo_tienda',
                'codigo_empresa',
                'nombre_tienda',
                'nombre_empresa',
                'direccion_tienda',
                'inactiva',
                'altitud',
                'latitud'
            ],
            where: {
                inactiva: false,
                altitud:  {
                    [Op.not]: [""]
                },
                latitud:  {
                    [Op.not]: [""]
                },
                codigo_tienda: {
                    [Op.not]: cod_tienda
                }
            },
            raw: true
        });
        return res.json(tiendas);
    } catch (err) {
        return res.status(500).json({ error: 'Error al obtener las tiendas', details: err.message });
    }
}

module.exports = {
    getAllTiendas
};