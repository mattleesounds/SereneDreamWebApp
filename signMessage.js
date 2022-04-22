const { ethers } = require("ethers");

//const INFURA_ID = '2d6784d79edc4227ab8ad282653ac8a8'
//const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/${INFURA_ID}')

// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)

//------------------------------------------------------------------------
//Sign Message
async function signMessage(){
    
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = await provider.getSigner()
}

//function a() {
//    console.log(aaaaaaaaaaaaaa)
//}
