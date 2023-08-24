const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config()


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log('Error al conectar a la base de datos')
    }
}

module.exports = {connect}
