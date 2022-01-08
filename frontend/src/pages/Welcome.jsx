import React from 'react';
import Container from 'react-bootstrap/Container'

const Welcome = () => {
    return (
        <>
            <div class='pb-5'>
                <div class='bg-info bg-gradient px-3 py-5 text-light'>
                    <Container>
                        <p class='display-1 fw-bold'>
                            Managing your intramural activities just got a whole lot <span class='text-primary'>easier, faster, free-er</span>.
                        </p>
                        <p class='lead'>
                            IntramuralHub makes it easy to create, advertise, and manage events and leagues. 
                            Organization members can join activities, create teams, and view their scores in a snap. <a href='#'>Sign up</a> your organization for free today!
                        </p>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Welcome;