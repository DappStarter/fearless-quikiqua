require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind concert harvest forget fox turtle'; 
let testAccounts = [
"0x5efc803fbeaaf6f05b6233a3a8173d2c9a47ed7192dc0962936a2b1b2419350a",
"0x4236d81b5129eedd9f1b183bc08a97c8e44aefb19c3b8c03160d8a256302c071",
"0xbe2cecf71a74b811f925a9e7d422a059d47a775f7daa7b2b5b8ecab7b2a52f6e",
"0x3cd1fa90eb22bca84ee5b276e7e4219a2a231cc4a9121989b0ba34154e5a0ecb",
"0xb2f7587f80b3cd8098db6a7c7460b8a6e9d40a0b96976871f244458bc466881f",
"0x70d9875787a471866898f3f8d0ffbb91343604c44a37d4944b8ac5def0ffa01e",
"0x5c56228360ff5a6776878e726e29a23b49f8c1eeec82af52a667f87b5d832810",
"0x736a5c4f9fb62057df7203fb27888672fe619e5f6cffbd3411f7821b97faaaf6",
"0x0d474fe34d98e2c171ceae910ccc7fa684ef8292bb21e81175585c9071451d62",
"0xa6f9c95057f08978c620c15bd95ab5f060828a98e715762fa3b056e307f3c071"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
