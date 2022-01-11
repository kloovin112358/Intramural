import React, { useEffect, useCallback, useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {
    const onGoogleLoginSuccess = useCallback(
        // response => {
        //   const idToken = response.tokenId;
        //   const data = {
        //     email: response.profileObj.email,
        //     first_name: response.profileObj.givenName,
        //     last_name: response.profileObj.familyName
        //   };
      
        //   validateTokenAndObtainSession({ data, idToken })
        //     .then(handleUserInit)
        //     .catch(notifyError);
        // },
        // [handleUserInit]
    );
    const onGoogleLoginFailure = useCallback(

    )
    return (
        <Container>
            <div className='p-5'>
                <div className='card mx-auto shadow' style={{ width: '25rem' }}>
                    <div className='card-body p-4'>
                        <h4 className='text-center mb-4'>Log in</h4>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="Email" type="email" />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control placeholder="Password" type="password"/>
                            </Form.Group>
                            <div className="d-grid">
                                <Button variant="primary" size="md">
                                    Log In
                                </Button>
                            </div>
                        </Form>
                        <hr className="my-4"></hr>
                        <div className="d-grid">
                        <GoogleLogin
                            clientId={"271793486041-bj9vu53gt84e6kgh81c8b1i857au5gam.apps.googleusercontent.com"}  // your Google app client ID
                            buttonText="Sign in with Google"
                            onSuccess={onGoogleLoginSuccess} // perform your user logic here
                            onFailure={onGoogleLoginFailure} // handle errors here
                        />
                        </div>
                    </div>  
                </div>
            </div>
        </Container>
        
    );
};

export default Login;