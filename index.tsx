import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import {testNum} from './funcSet1';

import {DealerAutoAdvanced} from './Transaction';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }


  //Typescript
  greeter(person: string) {

      var r1i  = new DealerAutoAdvanced();

      return "Hello, " + person;
  }





  render() {
    //const nfs = new FuncSet1();


    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
          <p/>
          {this.greeter("Peter")}          
          <p/>
          { testNum(2) }
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
