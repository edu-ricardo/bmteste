/// <reference path="../typings/index.d.ts" />

import mongoose = require('mongoose');

export interface ITests extends mongoose.Document {
    nome: string;
    descricao: string;
}

var _schema: mongoose.Schema = new mongoose.Schema({
    nome: {
        required: true,
        type: String
    },
    descricao: String
});

export var TestsModel = mongoose.model<ITests>('Tests', _schema);