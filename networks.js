var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('af4576ee'),
  addressVersion: 0x32,
  privKeyVersion: 178,
  P2SHVersion: 9,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('85A41EFACF83758FF7328FB3F0EF19F64B313DEAA0418493B520C0E4FD0F0000'),
    merkle_root: hex('DA6964FD87C79D6C9A288EF8BBCE4CDFFDE12212DC3015C2462FE9183CDB753F'),
    height: 0,
    nonce: 2092903596,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1393164995,
    bits: 504365055,
  },
  dnsSeeds: [
    'seed1.myriadcoin.org',
    'seed2.myriadcoin.org',
    'seed3.myriadcoin.org',
    'seed4.myriadcoin.org'
  ],
  defaultClientPort: 10889
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fcc1b7dc'),
  addressVersion: 0x71,
  privKeyVersion: 241,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('9E555073D0C4F36456DB8951F449704D544D2826D9AA60636B40374626780ABB'),
    merkle_root: hex('696AD20E2DD4365C7459B4A4A5AF743D5E92C6DA3229E6532CD605F6533F2A5B'),
    height: 0,
    nonce: 997879,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1391503289,
    bits: 504365040,
  },
  dnsSeeds: [
    'testdoge-seed.lionservers.de',
    'testdoge-seed-static.lionservers.de'
  ],
  defaultClientPort: 44556
};
