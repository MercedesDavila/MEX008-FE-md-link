const mdLinks = require('./cli.js')
const fetch = require('node-fetch');
const colors = require('colors');
const fileUser = process.argv[2];
let options = {
    validate: false,
    stats: false
}

mdLinks(fileUser, options).then((response) => {
    let arrValidate = [];

    if (process.argv[3] === '--validate') {
        options.validate = true;
        return response.forEach((element) => {
            fetch(element.href).then(res => {
                arrValidate.push(element);

                if (res.status === 200) {
                    return console.log(` File: ${element.file.magenta} \n Link: ${res.url.cyan} \n Status: ${res.statusText.bgGreen} ${res.status}  ${element.text.yellow}`);
                } else if (res.status === 404) {
                    return console.log(` File: ${element.file.blue} \n Link: ${element.href.cyan}   \n Status: ${res.statusText.bgRed} ${res.status}  ${element.text.yellow}`);
                }
            }).catch(err => {
                console.log(` File: ${element.file.blue} \n Link: ${element.href.bgRed} ${element.text.red}  <--- Enlace con Problemas`);

            });
        });

    } else if (process.argv[3] === '--stats') {
        options.stats = true;
        let urlArray = [];
        response.forEach(element => {
            urlArray.push(element.href)
        })
        console.log(`El total de links en el archivo ${fileUser.cyan} es: ${urlArray.length}`);

    } else {
        return response.forEach((element) => {
            let file = element.file,
                href = element.href,
                text = element.text;
            return console.log(file.blue + ' ' + text.yellow + ' ' + href.green);
        });
    }
});

module.exports = mdLinks;