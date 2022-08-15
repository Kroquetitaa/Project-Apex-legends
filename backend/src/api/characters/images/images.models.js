const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
       imageProfile: [{ type: String }],
       imageAbilities: [{ type: String }],
    }
);

module.exports = mongoose.model( 'images', schema );