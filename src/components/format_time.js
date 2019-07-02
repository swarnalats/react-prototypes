import React, { Component } from 'react';

class FormatTime extends Component 
{
    constructor(props)
    {
        super(props);
        this.millisecondsToTime = this.millisecondsToTime.bind(this);
    }
    millisecondsToTime()
    {
        const {elapsed} = this.props;
        const sec = elapsed /1000;
        const min = sec / 60;
        console.log("TIME:",elapsed);
        return {
            hr:Math.floor(min / 60),
            min:Math.floor(min % 60),
            sec:Math.floor(sec % 60),
            ms:Math.floor(elapsed % 100)
        }
    }
    render()
    {            
        const {hr,min,sec,ms} = this.millisecondsToTime();
        return (
            <div>{hr}:{min}:{sec}:{ms}</div>
        )
    }
}

export default FormatTime 