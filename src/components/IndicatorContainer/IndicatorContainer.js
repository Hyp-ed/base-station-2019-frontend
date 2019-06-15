import './IndicatorContainer.css'
import Indicator from '../Indicator/Indicator';

import React from 'react';

function IndicatorContainer(props) {
    const indicators = Array.from(props.indicators, indicator =>
                                    <Indicator key={indicator.indicatorTitle} name={indicator.indicatorName} />
                                 );

    return (
        <div className="indicator-container-root">
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
