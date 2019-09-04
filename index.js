const mdLinks = require('./cli.js')
const fetch = require('node-fetch');
const colors = require('colors');
const fileUser = process.argv[2];
let options = {
    validate: false,
    stats: false
}