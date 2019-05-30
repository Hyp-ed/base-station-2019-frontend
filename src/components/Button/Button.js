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
        let buttonClassName = 'button-root';

        if (this.state.disabled) {  // maybe keep as prop?
            buttonClassName += ' disabled';
        }

        return (
            <button className={buttonClassName} onClick={this.props.handleClick}>
                {this.props.name}
            </button>
        );
    }
}

export default Button
