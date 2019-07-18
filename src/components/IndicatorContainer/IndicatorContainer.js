import './IndicatorContainer.css'

import React from 'react';
import Indicator from '../Indicator/Indicator';

function IndicatorContainer(props) {
    const indicators = Array.from(props.indicators, indicator =>
                                    <Indicator
                                        key={indicator.indicatorName}
                                        name={indicator.indicatorName}
                                        operational={indicator.operational}
                                    />
                                 );

    return (
        <div>
            <h1 className="indicator-container-title title">
                {props.title}
            </h1>
            <div className="indicator-container">
                {indicators}
            </div>
        </div>
    );
}

export default IndicatorContainer;
