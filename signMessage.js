//const { ethers } = require("ethers");

//Link mysql2 library to store user info
const { ethers } = require('ethers');
var mysql = require('mysql2');

// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)

//------------------------------------------------------------------------
//Sign Message

async function sign(){

    const message = "This message verifies proof of listenership for the Serene Wrap EP"
    
    if (!window.ethereum){
        throw new Error("No crypto wallet found. Please install it.")
    }
    
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", [])
    
    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = await provider.getSigner()
    const signature = await signer.signMessage(message)
    const address = await signer.getAddress()
    
    
    //Check if message has been verified from this address
    //If so, connect to listeners database, then add address and sigature to listener_data table
    // if (verifyMessage(address, message, signature)){
    //   var con = mysql.createConnection({
    //     host: "localhost",
    //     user: "root",
    //     password: "leonardo11",
    //     database: "listeners"
    //   });
      
    //   con.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     var sql = "INSERT INTO listener_data (publicKey, signature) VALUES (?, ?)";
    //     con.query(sql, [address, signature], function (err, result) {
    //       if (err) throw err;
    //       console.log("1 record inserted");
    //     });
    //   });
    // }

   

}

// function verifyMessage(address, message, signature) {
//   if(address == ethers.utils.verifyMessage(message, signature)){
//     return true;
//   }
//   else {
//     return false;
//   }
// }



const signMessage = async ({ setError, message }) => {
    try {
      console.log({ message });
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");
  
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();
  
      return {
        message,
        signature,
        address
      };
    } catch (err) {
      setError(err.message);
    }
  };

//function a() {
//    console.log(aaaaaaaaaaaaaa)
//}
