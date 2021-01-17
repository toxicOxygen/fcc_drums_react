import React from 'react';
import DrumPad from './DrumPad';

function PadBank(props)
{
    let padBank;
    if (props.power)
    {
        padBank = props.currentBank.map((bank)=>(
            <DrumPad clip={bank.url} clipId={bank.id} keyTrigger={bank.keyTrigger} keyCode={bank.keyCode} display={props.display} power={props.power}/>
        ))
    }else{
        padBank = props.currentBank.map((bank)=>(
            <DrumPad clip="#" clipId={bank.id} keyTrigger={bank.keyTrigger} keyCode={bank.keyCode} display={props.display} power={props.power}/>
        ))
    }
    return (
        <div className="keypad">
            {padBank}
        </div>
    );
}

export default PadBank;