import React from 'react';
import PropTypes from 'prop-types';

const Weather = (props) => {
    const {beans} = props

    return (
        <div>{`Weather beans: ${beans}`}</div>
    )
}

Weather.propTypes = {
    beans: PropTypes.number
}
Weather.defaultProps = {
    beans: 0
}

export default Weather;