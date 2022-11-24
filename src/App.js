import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  
  // constructor(props){
    // super(props); 
    // this.state = { manager : '' };
  // }
  //@ same as above  
  state = {
    manager: '',
    players: [],
    contractBalance: '',
    valuee: '',
    message: '',
    winnerMessage: ''
  }
  // called every time the component gets rendered  
  async componentDidMount () {
    
    //@ now using MetaMask provider, so dont need to provide from address in the call() 
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    //@ balance is the object wrapped in library called bigNumber.js
    const contractBalance = await web3.eth.getBalance(lottery.options.address);
    this.setState({ manager, players, contractBalance });

  }

  onSubmit = async (event) => {
    // we dont want the form to be submitted in the classic HTML way 
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'The transanction is under process...'});
    await lottery.methods.enterLotter().send({
      from: accounts[0], 
      value: web3.utils.toWei(this.state.valuee, 'ether')
    })
    this.setState({message: 'You have been entered in the lottery.'});
  }

   onClick = async () => {
    const accounts = await web3.eth.getAccounts();
    this.setState({message: 'The transanction is under process...'});
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    this.setState({message: 'Winner picked!'});
    const winner = await lottery.methods.winner().call();
    this.setState({winnerMessage: 'Winner is '+ winner+'.'});
  }

  render() {
     return (
        <div>
          <h2>Lottery Contract</h2>
          <p>This contract is managed by { this.state.manager }.</p>   
          <p>There are currently {this.state.players.length} people entered, competing to win {web3.utils.fromWei(this.state.contractBalance, 'ether')} ether!</p>         

          <hr />

          <form onSubmit={this.onSubmit}>
            <div>
              <h4>Want to try your luck?</h4>
                <label>Amount of ether to enter: </label>
                <input 
                  value={this.state.valuee} 
                  onChange={event => this.setState({ valuee: event.target.value })}
                />
             </div>
            <button>Enter</button>
          </form>

          <hr />

          <h4>Time to pick a winner?</h4>
          <button onClick={this.onClick}>Pick Winner</button>

          <hr />

          <h1>{this.state.message}</h1>
          <h1>{this.state.winnerMessage}</h1>
        </div>
      );
  }
 
}

export default App;
