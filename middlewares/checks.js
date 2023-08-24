const {check} = require ('express-validator')


const checks= [
    check('numero').notEmpty().withMessage('El numero del pokemon es obligatorio').isNumeric().withMessage('El numero del pokemon debe ser un numero'),
    check('nombre').notEmpty().withMessage('El nombre del pokemon es obligatorio').isString().withMessage('El nombre del pokemon debe ser un String'),
    check('tipo').notEmpty().withMessage('El tipo del pokemon es obligatorio').isString().withMessage('El tipo del pokemon debe ser un String'),
    check('debilidades').notEmpty().withMessage('Las debilidades del pokemon son obligatorias').isString().withMessage('Las debilidades del pokemon deben ser un String'),
]

module.exports = checks