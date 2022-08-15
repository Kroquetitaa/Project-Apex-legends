const Characters = require('./characters.models');
const { setError } = require('../../helpers/error');

const createCharacter = async( req, res, next ) => {
    try {
        const newCharacter = new Characters( req.body );
        const characterInDB = await newCharacter.save();
        return res.json(
            {
                status: 201,
                message: 'Created new Character',
                results: { characterInDB },
            }
        )
    } catch (error) {
        return next( setError( 500, error.message || 'Error to created new Character' ));
    }
};

const getAllCharacters = async( req, res, next ) => {
    try {
        const characters = await Characters.find().populate('images').exec((err, posts) => {
            console.log( err )
            console.log("Populated User " + posts);
          });
        return res.json(
            {
                status: 200,
                message: 'Recover all Characters with success',
                results: { characters }
            }
        )
    } catch (error) {
        return next( setError( 500, error.message || 'Error to visualize all Characters' ));
    }
}

const characterByName = async( req, res, next ) => {
    try {
        const { name } = req.params;
        const character = await Characters.findOne( { name: name } );
        if( !character ) return next( setError( 404, 'Character not found!' ));
        return res.json(
            {
                status: 200,
                message: 'Recover character by Name',
                results: { character },
            }
        )
    } catch (error) {
        return next( setError( 500, error.message || 'Error to find character by Name' ));
    }
}

const characterByAge = async( req, res, next ) => {
    try {
        const { age } = req.params;
        const character = await Characters.findOne( { age: age } );
        if( !character ) return next( setError('Character not found'));
        return res.json(
            {
                status: 200,
                message: 'Recover character by age',
                results: { character },
            }
        )
    } catch (error) {
        return next( setError( 500, error.message || 'Error to find character by age' ));
    }
}

const getCharacterByID = async( req, res, next, ) => {
    try {
        const { id } = req.params;
        const character = await Characters.findOne( { id: id } );
        if( !character ) return next( setError('Character not found')); 
        return res.json(
            {
                status: 200,
                message: 'Recover character by age',
                results: { character },
            }
        )
    } catch (error) {
        return next( setError( 500, error.message || 'Error to find by ID' ));
    }
}

const filter = async( req, res, next ) => {
    try {
        const values = req.query;
        const filterValues = await Characters.find( values );
        if( !filterValues ) return next( setError(404, 'Filter not found'));
        return res.json({
            status: 200,
            message: 'Recovered filter Character',
            results: filterValues,
        })
    } catch (error) {
        return next( setError( 500, error.message || 'Failed to recovered filter Characters!'));
    }
}

const update = async( req, res, next ) => {
    try {
        const { id } = req.params;
        const character = new Characters( req.body );
        character._id = id;
        const updateCharacter = await Characters.findByIdAndUpdate( id, character );
        if( !updateCharacter ) return next( setError(404, 'Character not found'));
        return res.json(
            {
                status: 201,
                message: 'Update Character',
                data: { updateCharacter },
            }
        )
    } catch (error) {
        return next( setError( 500, error.message || 'Failed to updated Character!'))
    }
}

const removeID = async( req, res, next ) => {
    try {
        const { id } = req.params;
        const deletedID = await Characters.findOneAndDelete( { id: id } );
        if( !deletedID ) return next( setError(404, 'ID not found' ));
        return res.json({
            status: 200,
            message: 'Deleted ID',
            data: { deletedID },
        })
    } catch (error) {
        return next( setError( 500, error.message || 'Failed delete ID' ));
    }
}

module.exports = { createCharacter, getAllCharacters, characterByName, characterByAge, getCharacterByID, filter, update,removeID };