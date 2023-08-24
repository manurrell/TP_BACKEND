const {validationResult} = require('express-validator');
const validarChecks = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        next()
    } else {
        res.status(400).json(errors)
    }
}

module.exports = {validarChecks}