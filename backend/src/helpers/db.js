const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB = process.env.MONGO_DB;

const connectDB = async () => {
    try {
        const db = await mongoose.connect( MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const { name, host } = db.connection;
        console.log(`Connected with db 💾 name: ${name} in host: ${host}`)
    } catch (error) {
        console.error(`Error to connect with db 💾 ${error}`);
    }
}

module.exports = { connectDB }