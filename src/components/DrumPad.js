import React from "react"

const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: '0 3px orange',
    height: 77,
    marginTop: 13 
};
  
  
const inactiveStyle = {
    backgroundColor: 'grey',
    marginTop: 10,
    boxShadow: '3px 3px 5px black' 
};

class DrumPad extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            padStyle : inactiveStyle
        }
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.playSound = this.playSound.bind(this)
        this.activatePad = this.activatePad.bind(this)
    }

    componentDidMount()
    {
        document.addEventListener('keydown', this.handleKeyPress)
    }

    componentWillUnmount()
    {
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress(e)
    {
        if (e.keyCode === this.props.keyCode)
            this.playSound()
    }

    activatePad()
    {
        if (this.props.power) //power on
        {
            if (this.state.padStyle.backgroundColor === 'orange')
            {
                this.setState({padStyle: inactiveStyle})
            }else{
                this.setState({padStyle: activeStyle})
            }
        }
        else if (this.state.padStyle.marginTop === 13) //no power
        {
            this.setState({padStyle: inactiveStyle})
        }
        else{
            this.setState({
                padStyle: {
                    height: 77,
                    marginTop: 13, 
                    backgroundColor: 'grey',
                    boxShadow: '0 3px grey'
                }
            })
        }
    }

    playSound()
    {
        let soundELem = document.getElementById(this.props.keyTrigger)
        soundELem.currentTime =  0
        soundELem.play();
        this.activatePad()
        setTimeout(()=>this.activatePad(),100)
        if (this.props.power)
            this.props.display(this.props.clipId)
        else
            this.props.display()
    }

    render()
    {
        return (
            <div style={this.state.padStyle} className="drum-pad" id={this.props.clipId} onClick={this.playSound}>
                <audio className="clip" src={this.props.clip} id={this.props.keyTrigger}></audio>
                {this.props.keyTrigger}
            </div>
        )
    }
}


export default DrumPad;