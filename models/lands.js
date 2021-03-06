'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const landsSchema = mongoose.Schema({

    alfaX  : String,//координата большей по икс
    alfaY  : String,//координата большей по игрек
    type   : String,//тип ячейки (лес, дорога)
    beta   : String//массив в виде строки где указаны типы всех внутренних ячеек через запятую

});

mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost:27017/node-login');

module.exports = mongoose.model('lands', landsSchema);

//mongoose.connect('mongodb://alfaneos:C2M3IT7olhl6TkqzTZN1EKJOqwA6l0n4nElcz5739WyqVsoAcvVuWMs4thkM9ZrlWzObyxG9csN86bEGLxsw0g==@alfaneos.documents.azure.com:10250/?ssl=true');
