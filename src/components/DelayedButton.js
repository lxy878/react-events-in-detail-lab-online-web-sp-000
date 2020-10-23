import React from 'react'

export default class DelayedButton extends React.Component{

    delay = (event) =>{
        event.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }

    render(){
        return (
            <button onClick={this.delay}>Delay</button>
        )
    }
}
