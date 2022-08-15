const CharactersRoutes = require('express').Router();
const { createCharacter, getAllCharacters, characterByName, characterByAge, getCharacterByID, filter, update, removeID} = require('./characters.controller');

CharactersRoutes.post('/create', createCharacter );
CharactersRoutes.get('/getAllCharacters', getAllCharacters);
CharactersRoutes.get('/getCharacterByName/:name', characterByName);
CharactersRoutes.get('/characterByAge/:age', characterByAge);
CharactersRoutes.get('/getCharacterByID/:id', getCharacterByID);
CharactersRoutes.get('/filter', filter);
CharactersRoutes.patch('/update/:id', update);
CharactersRoutes.delete('/remove/:id', removeID);

module.exports = CharactersRoutes;