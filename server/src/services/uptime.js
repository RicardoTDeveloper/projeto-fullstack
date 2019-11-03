const fs = require('fs')

function leitura(){

    return new Promise((resolve,reject) => {

        fs.readFile( __dirname + '/../public/assets/historico.txt', 'utf8', (err, data) => {
            if(err) throw err;
            
             const result = data.split('https://www.ricardodesenvolvedor.com')
            //  console.log(result.length);

             let uptime = {
                 online: 0,
                 offline: 0,
                 soma: function () {
                     return this.online + this.offline;
                 },
                 set online(){
                     // Apenas adicionei como para implementar mais tarde.
                 }
             };

             result.map((valor,index,array) => {
                 if (valor.indexOf('520') > 0) {
                    uptime.offline++;
                 } else {
                    uptime.online++;
                 }
             });
             
            //  let valortotal = (uptime.online + uptime.offline)

             let resultado = (uptime.offline * 100) / uptime.soma();

            //  console.log(resultado.toFixed(2));
             resolve(resultado.toFixed(2)); 
             
        })

    })

}

exports.leitura = leitura;
