import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'

const OrganizationsWidget = (props) => {
    const {name} = props

    return (
        <Card>
            <div className='card-body'>
            Name: {name}
            </div>
        </Card>
    )
}

OrganizationsWidget.propTypes = {
    name: PropTypes.string
}
OrganizationsWidget.defaultProps = {
    name: ""
}

export default OrganizationsWidget;