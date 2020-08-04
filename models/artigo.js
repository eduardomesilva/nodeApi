const mongoose = require('mongoose');

const Artigo = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    idade: {
        type: String,
        required: true
    },

    cpf: {
        type: Float32Array,
        required: true
    },

    nome_da_mae: {
        type: String,
        required: true
    },

  nome_do_pai: {
        type: String,
        riquired: true
    }

},
{
    timestamps: true,

});

mongoose.model('artigo', Artigo);