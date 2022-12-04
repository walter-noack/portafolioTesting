const frisby = require('frisby');

it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('https://pokedex-v3kh.onrender.com/api/poke')
    .expect('status', 200);
});


it ('POST should return a status of 200 Created', function () {
  return frisby
    .post('https://pokedex-v3kh.onrender.com/api/poke', {
        number:"800",
        name:"PokeTest",
        type1:"Prueba1",
        type2:"Prueba2"
    
    })
    .expect('status', 200);
});



it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('https://pokedex-v3kh.onrender.com/api/poke/getType/Water')
    .expect('status', 200);
});



it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('https://pokedex-v3kh.onrender.com/api/poke/getName/Pikachu')
    .expect('status', 200);
});

