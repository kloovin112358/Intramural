import React from 'react';
import PropTypes from 'prop-types';

const Newsfeed = (props) => {
    const {beans} = props

    return (
        <div>{`News beans: ${beans}`}</div>
    )
}

Newsfeed.propTypes = {
    beans: PropTypes.number
}
Newsfeed.defaultProps = {
    beans: 0
}

export default Newsfeed;