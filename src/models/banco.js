var fs = require('fs');

function banco() {}

banco.prototype.getBanco = function(callback) {
  fs.readFile('./data/dados_banco.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      
      var objeto = JSON.parse(result);
      var i = 0; //(objeto.info.length - 1);

      objeto.info.forEach(function(info) {
        if (i >=  0) {
          data[i] = info;
	      i++;
        }
      });
    }	   
    callback(err, data);
  });
};

module.exports = function(){
  return banco;
}