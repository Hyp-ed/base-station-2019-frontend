import './IndicatorContainer.css'

import React from 'react';
import Indicator from '../Indicator/Indicator';

function IndicatorContainer(props) {
    const indicators = Array.from(props.indicators, indicator =>
                                    <Indicator
                                        key={indicator.indicatorName}
                                        name={indicator.indicatorName}
                                        enabled={indicator.enabled}
                                    />
                                 );

    return (
        <div>
            <h1 className="indicator-container-title">
                {props.title}
            </h1>
            <div className="indicator-container">
                {indicators}
            </div>
        </div>
    );
}

export default IndicatorContainer;
