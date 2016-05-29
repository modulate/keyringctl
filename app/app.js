exports = module.exports = function(Crypto) {
  
  return function run() {
    Crypto.generateKey({ type: 'RSA', bits: 1024 }, function(err, key) {
      
    });
  }
}

exports['@require'] = [ 'http://i.bixbyjs.org/crypto' ];
