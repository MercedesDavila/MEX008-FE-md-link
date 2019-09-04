#!/usr/bin/env node

const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
const colors = require('colors');

//------------------------ Funcion que retorna los links
const mdLink = (fileName) => new Promise((resolve, err) => {

    let urlToAbsolute = path.resolve(fileName);
    let extFile = path.extname(urlToAbsolute);
});