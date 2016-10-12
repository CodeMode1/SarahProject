var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Admin = require('../models/admin');

var clientSchema = new Schema({
    prenom: { type: String},
    nom: { type: String, required: true, unique: true},
    noCompte: { type: String},
    courriel: { type: String},
    cell: { type: String},
    compagnie: { type: String},
    adresse: { type: String},
    ville: { type: String},
    codePostal: { type: String},
    telPrincipal: { type: String},
    province: { type: String},
    pays: { type: String},
    fax: { type: String },
    telSecondaire: { type: String},
    memo: { type: String},
    memoAVenir: { type: String},
    noExTaxeProv: { type: String},
    noExTaxeFéd: { type: String},
    selectStatut: { type: String},
    selectSource: { type: String},
    modifPar: { type: String},
    modif: { type: Date},
    dateDernEv: { type: Date},
    creerPar: { type: String },
    dateCree: { type: Date, default: Date.now }
});

clientSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Client', clientSchema);