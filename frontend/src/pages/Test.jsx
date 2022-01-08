import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Newsfeed from '../components/Newsfeed'
import Weather from '../components/Weather'

// use recoil if you want global state variables

// use state when you want to change the value of an object you are rendering

const About = () => {
    // beans is stateful, initial value set to 5
    const [beans, setBeans] = useState(5);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        let mounted = true;
        if(beans > 10 && mounted) {
            setBeans(0)
        }
        console.log(beans)
        return () => {mounted = false}
    },[beans])
    useEffect(()=>{
        let mounted = true
        console.log("i will run when the page first loads")
        document.title = "IntramuralHub | About"
        if(mounted)
            setLoading(true)
        setTimeout(function() {
            if(mounted) setLoading(false)
            console.log('done loading')
        }, 5000)
        return () => {mounted = false}
    },[])
    const apiRequest = async () => {
        const apiURL = 'aurlhere';
        await axios.get(apiURL).then((result) =>{
            //do things
        }).catch((error) =>{
            console.log(error)
        })
    }
    //loading animation - loading variable true then false, hide and unhide animation
    return (
        <>
            {loading ? <div>LOADING</div> :<><Button variant='primary' onClick={() => {setBeans(beans+1)}}>click to add a bean</Button>
            <Newsfeed beans={beans}/>
            <Weather beans = {beans}/></>}
        </>
    )
}

export default About;