const mongoose = require('mongoose');
const { NATALWORLD } = require('../../helpers/constants/NATALWORLD');
const Schema = mongoose.Schema;


const schema = new Schema(
    {
        name: { type: String },
        motto: { type: String },
        classType: { type: String },
        description: { type: String },
        realname: { type: String },
        age: { type: Number },
        natalWorld : { type: String, enum: NATALWORLD },
        tacticalAbility: { type: String },
        tacticalPassive: { type: String },
        ultimateAbility: { type: String },
        imagesAbilities: [{ type: Schema.Types.ObjectId, ref: 'images' }]
    }
);

module.exports = mongoose.model( 'characters', schema );