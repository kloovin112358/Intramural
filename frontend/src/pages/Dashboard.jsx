import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container'
import axios from 'axios';
import OrganizationsWidget from '../components/OrganizationsWidget'

const Dashboard = () => {

    const [name, setName] = useState();

    useEffect(()=>{
        apiRequest()
        return () => {}
    },[])

    const apiRequest = async () => {
        const apiURL = 'http://127.0.0.1:8000/api/orgs/';
        await axios.get(apiURL).then((result) =>{
            console.log(result.data[0])
            setName(result.data[0].name)
        }).catch((error) =>{
            console.log(error)
        })
    }

    return (
        <Container>
            <div className='p-5'>
                <OrganizationsWidget name={name}/>
            </div>  
        </Container>
    )
}

export default Dashboard;