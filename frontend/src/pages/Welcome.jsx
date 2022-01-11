import React from 'react';
import Container from 'react-bootstrap/Container'

const Welcome = () => {
    return (
        <>
            <div className='pb-5'>
                <div className='bg-info bg-gradient px-3 py-5 text-light'>
                    <Container>
                        <p className='display-1 fw-bold'>
                            Managing your intramural activities just got a whole lot <span className='text-primary'>easier, faster, free-er</span>.
                        </p>
                        <p className='lead'>
                            IntramuralHub makes it easy to create, advertise, and manage events and leagues.
                            Organization members can join activities, create teams, and view their scores in a snap. <a href='/signup' className='fw-bold'>Sign up your organization</a> for free today, 
                            or create an account if your group is already on IntramuralHub!
                        </p>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Welcome;