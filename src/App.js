import React from "react";
import PadBank from "./components/PadBank";
import ControlPanel from "./components/ControlPanel"

import {bankOne, bankTwo} from "./soundData"

class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      currentBank: bankOne,
      power: false, 
      isFirstBank: true,
      displayTxt: ''
    }
    this.togglePower = this.togglePower.bind(this)
    this.toggleBank = this.toggleBank.bind(this)
    this.setDisplay = this.setDisplay.bind(this)
  }

  togglePower()
  {
    this.setState({power: !this.state.power})
  }

  toggleBank()
  {
    if(this.state.isFirstBank)
    {
      this.setState({currentBank: bankTwo, isFirstBank: false})
    }
    else
    {
      this.setState({currentBank: bankOne, isFirstBank: true})
    }
  }

  setDisplay(txt='')
  {
    this.setState({displayTxt: txt})
  }

  render()
  {
    return (
      <main className="main-content" id="drum-machine">
        <PadBank currentBank={this.state.currentBank} power={this.state.power} display={this.setDisplay}/>
        <ControlPanel togglePower={this.togglePower} toggleBank={this.toggleBank} power={this.state.power} bank={this.state.isFirstBank} display={this.state.displayTxt}/>
      </main>
    );
  }
}



export default App;
