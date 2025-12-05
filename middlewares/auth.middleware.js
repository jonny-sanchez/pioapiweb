const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.DB_SECRET_KEY

function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];

    if(!authHeader){
        return res.status(401).json({ error: 'Token requerido' });
    }

    const token = authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({ error: 'Token inválido' });
    }
    
    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        console.log("Error ", err)
        return res.status(500).json({
            error: 'Token no válido o expirado',
            details: err.message
        });
    }
}

module.exports = authMiddleware;