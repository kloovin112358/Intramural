import React, { useEffect, useCallback, useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import Container from 'react-bootstrap/Container'

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
            <div class='p-5'>
                <div class='card'>
                    <div class='card-body'>
                        <GoogleLogin
                            clientId={"271793486041-bj9vu53gt84e6kgh81c8b1i857au5gam.apps.googleusercontent.com"}  // your Google app client ID
                            buttonText="Sign in with Google"
                            onSuccess={onGoogleLoginSuccess} // perform your user logic here
                            onFailure={onGoogleLoginFailure} // handle errors here
                        />
                    </div>  
                </div>
            </div>
        </Container>
        
    );
};

export default Login;