const { Router } = require('express');
const { check } = require('express-validator');


const { usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete } = require('../controllers/usuarios');

const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', usuariosGet);

router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    check('rol').custom(esRoleValido),
    validarCampos
],usuariosPut );

router.post('/', [
    check('nombre', 'Nombre obligatorio').not().isEmpty(),
    check('password', 'password mas de 6 letras').isLength({ min: 6 }),
    check('correo', 'Correo no valido').isEmail(),
    check('correo').custom(emailExiste),
    //check('rol', 'no es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(esRoleValido),

    validarCampos
], usuariosPost);

router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
] , usuariosDelete);

module.exports = router;