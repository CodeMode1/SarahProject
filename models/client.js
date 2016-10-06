var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Admin = require('../models/admin');

var clientSchema = new Schema({
    prenom: { type: String, required: true},
    nom: { type: String, required: true, unique: true},
    noCompte: { type: String, required: true },
    courriel: { type: String, required: true},
    compagnie: { type: String, required: true},
    adresse: { type: String, required: true},
    ville: { type: String, required: true},
    codePostal: { type: String, required: true},
    cell: { type: String, required: true},
    telPrincipal: { type: String, required: true},
    province: { type: String, required: true},
    pays: { type: String, required: true},
    fax: { type: String },
    telSecondaire: { type: String},
    creerPar: { type: String },
    dateCree: { type: Date, default: Date.now },
});

clientSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Client', clientSchema);