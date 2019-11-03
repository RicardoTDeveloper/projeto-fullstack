const axios = require('axios')
const fs = require('fs')

const api = axios.create({
    baseURL: 'https://www.ricardodesenvolvedor.com'
});

function historico() {

    setInterval(() => {

        api.get('/')
        .then((res) => {
            const {status} = res.response
            const {url} = res.config
            const data = new Date()
            const template = `uptime check website: \n
            Data: ${data} - Status: {${status}} - Target: ${url} \n\n`
            
            var options = { flag : 'a' };
            fs.writeFile(__dirname + '/../public/assets/historico.txt', template, options, (err) => {
                if (err) {
                     return console.log(err);
                }
               return console.log('Salvo com sucesso!');
            })
     
        })
        .catch(function (error) {
            // handle error
           const {status} = error.response
           const {url} = error.config
           const data = new Date()
           const template = `uptime check website: \n
           Data: ${data} - Status: {${status}} - Target: ${url} \n\n`
    
           var options = { flag : 'a' };
           fs.writeFile(__dirname + '/../public/assets/historico.txt', template, options, (err) => {
               if (err) {
                    return console.log(err);
               }
              return console.log('Salvo com sucesso!');
           })
    
        //    return console.log(template + template);
    
        })
        .finally(function () {
            // always executed
        });

    }, 1800000)

}

exports.historico = historico;





