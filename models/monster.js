'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const monsterSchema = mongoose.Schema({



    name              : String,
    level : [Number],
    class1 : [String],
    characteristics : [Number],
    inventory : [Number],
    abilities : [Number]





});

mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost:27017/node-login');

module.exports = mongoose.model('monster', monsterSchema);

//mongoose.connect('mongodb://alfaneos:C2M3IT7olhl6TkqzTZN1EKJOqwA6l0n4nElcz5739WyqVsoAcvVuWMs4thkM9ZrlWzObyxG9csN86bEGLxsw0g==@alfaneos.documents.azure.com:10250/?ssl=true');