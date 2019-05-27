import './BarContainer.css';

import React from 'react';
import Bar from '../Bar/Bar';

function BarContainer(props) {
    return (
        <div className="bar-container-root">
            <h1 className="bar-container-title">{props.title}</h1>
            <div className="bar-container">
                {props.bars.map((bar) =>
                    <div key={bar.title} className="bar-container-item">
                        <Bar
                            name={bar.title}
                            unit={bar.unit}
                            value={bar.value}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default BarContainer;
