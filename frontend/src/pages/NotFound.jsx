import React from 'react';
import Container from 'react-bootstrap/Container'

const NotFound = () => {
    return (
        <Container>
            <div className='text-center p-5'>
                <p className='display-1 fw-bold text-primary' style={{ fontSize: '13rem' }}>404</p>
                <small className='text-info'>Sorry, we couldn't find that page for you.</small>
            </div>        
        </Container>
    )
}

export default NotFound;