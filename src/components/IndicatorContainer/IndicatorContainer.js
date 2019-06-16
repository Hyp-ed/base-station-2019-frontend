import './IndicatorContainer.css'

import React from 'react';
import Indicator from '../Indicator/Indicator';

function IndicatorContainer(props) {
    const indicators = Array.from(props.indicators, indicator => <div key={indicator.indicatorTitle} className="indicator-container-flex-item">
                                                        <Indicator
                                                            name={indicator.indicatorName}
                                                            enabled={indicator.enabled}
                                                        />
                                                    </div>
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
