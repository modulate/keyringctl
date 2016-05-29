exports = module.exports = function(keyring, Crypto) {
  
  return function run() {
    Crypto.generateKey({ type: 'RSA', bits: 1024 }, function(err, key) {
      if (err) { throw err; }
      
      keyring.add(key, function(err) {
        console.log('ADDED!');
        console.log(err);
        
      });
    });
  }
}

exports['@require'] = [
  'crypto/db/vault/keyring', //'http://i.bixbyjs.org/crypto/Keyring',
  'http://i.bixbyjs.org/crypto'
];
