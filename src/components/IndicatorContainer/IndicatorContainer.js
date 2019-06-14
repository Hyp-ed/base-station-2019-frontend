import './IndicatorContainer.css'
import Indicator from '../Indicator/Indicator';

import React from 'react';

function IndicatorContainer(props) {
    const indicators = Array.from(props.indicators, indicator => <div key={indicator.indicatorTitle} className="indicator-container-flex-item">
                                                        <Indicator
                                                            name={indicator.indicatorName}
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

IndicatorContainer.defaultProps = {
    title: "default",

}

export default IndicatorContainer;