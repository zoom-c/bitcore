var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fbbfa54a'),
  addressVersion: 103,
  privKeyVersion: 231,
  P2SHVersion: 92,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('5B19FD8BDE1F52B728581D59647D36E9658CB9594ED5A382960AED0822F77255'),
    merkle_root: hex('4FFFC9C3ADF96EA6875A6E4AEE891ABDE5B9B6592E67DFD4CBEC79AA53827F3F'),
    height: 0,
    nonce: 1273766,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1433780305,
    bits: 504365040,
  },
  dnsSeeds: [
    'zoomcoin.co'
  ],
  defaultClientPort: 26888
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
