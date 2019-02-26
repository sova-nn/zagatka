const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/agata');
const db = Mongoose.connection;
db.on('error', function(err) {
   console.log('Ошибка подключения к базе', err);
   throw err;
});

db.once('open', function() {
    console.log('Connection to db succeed');
});