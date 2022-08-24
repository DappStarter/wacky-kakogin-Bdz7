require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'jazz arch suspect venture stove radar pumpkin undo harvest immense army giant'; 
let testAccounts = [
"0x969e2a14ea1e3a247d7ec2963a2fa3c13cc0b74734c05caa4c905a10a830302a",
"0xd0e0ff2ee6ac3dbdbbf3c90244f36972a725f61625420094b68e64df9b2f29aa",
"0x7e6a8384cf7920f2c639113166ee13a4302b0283242f46ead5c326b4e8a39520",
"0x1c891c8a5261cfb9b7415308cd8ed5cacc1fbe6eb26693c399fafabbc80d99a3",
"0xb360bf8088822095b2741809f57f7a35b917dbd9960c0ab5abf2ff7028b54ab3",
"0xda7e3d9c22f64ddd8e15d4f4665f5dab9ae71daf5e2c3b21c8ee8619f3523e65",
"0x3c53c469719df4a8efb92958e68606c8779791c2a7f5fe74d4c340439ae32b52",
"0x5f2dd30f08f1ddf876a6f45f22bc388e44dd8347eb2ee5c8cc3fc210298bdb04",
"0xd09322c8936bf42aac20d54de773c86bc06af1a4a774b5035a1941a76b4b5615",
"0xbb296159118634ff06f73ab36c0065ee0fb3d5ba0e3699e58ba69e34d39273f7"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


