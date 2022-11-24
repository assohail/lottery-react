# [Lottery React](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/)

It has a prize pool and list of people who can participate in the pool as players. After certain no of players the manager can tell the contract to pick the winner. The contract will look at the players and will send all the prize pool money to the winner. The contract then resets itself and can be used to play again.

## Getting Started
```
> git clone 
> cd 
> npm install 
> npm start
```
### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Tasks Remaining
- [x] Contract Creation
- [x] Testing on Remix  
- [ ] Write Test Cases
- [x] Frontend
- [ ] Cloud Deployment 
- [ ] Compile Script
- [ ] Deployment Script

## Tools, Languages, Frameworks
* React
* Remix
* Truffle 
* Ganache
* Solidity
* Infura 
* MetaMask
* Web3
* Node

## Notes
* /src/build is not needed in the project and is not used. Only used for storing .json.
* web3 is always injected to every page of the browser by MetaMask
* When using MetaMask provider, we dont need to provide from address in the call(), it uses default address set already in the MetaMask 

