const express = require('express');
const router = express.Router();
const visita = require('../controllers/pioapp/visita.controller');
const users = require('../controllers/pioapp/users.controller');
const empleados = require('../controllers/nomina/empleado.controller');
const supervisores = require('../controllers/pdv/vwDwhSupervisores.controller');
const tiendas = require('../controllers/pdv/vwTiendasModulo.controller');
const login = require('../services/authService');
const auth = require('../middlewares/auth.middleware');

//VISITAS
router.get('/visitas/getAllVisita', auth, visita.getAllVisitas);
router.get('/visitas/getVisitaBySupervisor/:id_users', auth, visita.getVisitaBySupervisor);
router.get('/visitas/getUltimaVisitaBySupervisor/:id_users', auth, visita.getUltimaVisitaBySupervisor);
router.get('/visitas/getTiposVisita', auth, visita.getTiposVisita);
router.post('/visitas/createVisitaEmergencia', auth, visita.createVisitaEmergencia);
router.get('/visitas/getVisitasEmergencia', auth, visita.getVisitasEmergencia);
router.get('/visitas/getVisitasEmergenciaById/:id_visita', auth, visita.getVisitasEmergenciaById)

//USERS
router.get('/users/getAllUsers', auth, users.getAllUsers);
router.get('/users/getAllSupervisors', auth, users.getAllSupervisors);

//EMPLEADOS
router.get('/empleados/getAllEmpleados', auth, empleados.getAllEmpleados);

//SUPERVISORES
router.get('/supervisores/getAllSupervisors', auth, supervisores.getAllSupervisors);

//TIENDAS
router.get('/tiendas/getAllTiendas/:cod_tienda', auth, tiendas.getAllTiendas);

//LOGIN
router.post('/login', login);

module.exports = router;