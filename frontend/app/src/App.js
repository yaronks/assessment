import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { CreateSuperhero, SecretInfo } from './Superhero'
import { renderToStringWithData } from 'react-apollo';


const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
});


class App extends Component {
  state = {
    clicked: false,
    evil: false
  } 

  setStateGoodHandler = () => {
    console.log('works');
    this.setState({clicked: !this.state.clicked})
  }
  setStateBadHandler = () => {
    console.log('works');
    this.setState({evil: true})
  }
  render(){
    return(
      <ApolloProvider client={client}>
      <div style= {{
        backgroundColor: '#red',
        display: 'flex',
      }}>

        <CreateSuperhero/>
        <button
        onClick={this.setStateGoodHandler}>
          Toggle Heroes:
        </button>

        <button
        onClick={this.setStateBadHandler}>
          Pick Evil:
        </button>

        {(this.state.clicked & ~this.state.evil) ? 
          <SecretInfo/>: null
        }
        {this.state.evil ? <p>You've Chosen Evil and there is no turning back</p> : null}
        

      </div>
      </ApolloProvider>
    );
  }
  
}

export default App;
