import './Button.css';

import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        };
    }

    render() {
        return (
            <button disabled={this.state.disabled} className='button-root' onClick={this.props.handleClick}>
                {this.props.name}
            </button>
        );
    }
}

export default Button
