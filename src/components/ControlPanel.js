import React from "react";

function TinyDisplay(props)
{
  return (
    <>
      <div className="tiny-display" id="display">
        {props.txt}
      </div>
    </>
  );  
}


function VolumeSlider(props)
{
  return(
    <>
      <div class="volume-slidecontainer">
        <input type="range" min="1" max="100" class="volume-slider"/>
      </div>
    </>
  );
}

function ToggleButton(props)
{

  return (
    <div>
      <h4 className="toggle-btn-title">{props.label}</h4>
      <label class="switch">
        <input type="checkbox" onClick={props.handleToggle} value={props.data}/>
        <span class="slider"></span>
      </label>
    </div>
  );
}


function ControlPanel(props)
{
    return(
        <div className="control-panel">
            <ToggleButton label="Power" handleToggle={props.togglePower} data={props.power}/>
            <TinyDisplay txt={props.display}/>
            <VolumeSlider/>
            <ToggleButton label="Bank" handleToggle={props.toggleBank} data={props.bank}/>
        </div>
    )
}

export default ControlPanel