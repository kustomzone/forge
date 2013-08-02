var ASSERT = chai.assert;
mocha.setup({
    ui: 'bdd'
});
requirejs.config({
    paths: {
        forge: 'forge',
        test: 'test'
    }
});
requirejs([
    'test/util',
    'test/md5',
    'test/sha1',
    'test/sha256',
    'test/hmac',
    'test/pbkdf2',
    'test/mgf1',
    'test/random',
    'test/asn1',
    'test/pem',
    'test/rsa',
    'test/pkcs1',
    'test/x509',
    'test/csr',
    'test/aes',
    'test/rc2',
    'test/des',
    'test/tls'
], function() {
    mocha.run();
});
