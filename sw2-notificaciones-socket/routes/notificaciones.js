const { Router } = require('express');

const { notificacionesGet,        
        notificacionesDelete
} = require('../controllers/notificaciones');

const router = Router();


//router.get('/:idmedico', notificacionesGet );
router.get('', notificacionesGet );
//router.put('/:idcita', notifcacionesPut );
router.delete('/:idproducto', notificacionesDelete );
module.exports = router;