import React from 'react';
import Container from 'react-bootstrap/Container'

const About = () => {
    return (
        <>
            <div className='pb-5'>
                <div className='bg-primary bg-gradient px-3 py-5 text-light'>
                    <Container>
                        <p className='display-1 fw-bold'>
                            We hate <span className='text-info'>ads</span>.
                        </p>
                        <p className='lead'>
                           We really hate paying for things. Even worse than paying for things is a site riddled with advertisements that you can't block. That's why 
                           IntramuralHub is committed to being a free, open-source website as long as it's around (we hope that's a while). You can contribute to the project <a className='text-info' href='https://github.com/kloovin112358/Intramural'>here</a>.
                        </p>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default About;