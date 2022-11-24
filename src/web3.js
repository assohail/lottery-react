import Web3 from 'web3';

// Web3() gives the configured provider according to the installed version of web3 which is version 1.0.0-beta
const web3 = new Web3(window.ethereum);

export default web3;