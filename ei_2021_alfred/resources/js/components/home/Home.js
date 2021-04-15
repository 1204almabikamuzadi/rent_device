import React from 'react';
import Button from '@material-ui/core/Button';
import { FaAmazon } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";
import Footer from "./Footer";

function Home(props) {
    return (
        <div>
                 
                <Button variant="contained" color="primary">
                Hello World
                </Button>
                <h1><FaAmazon color="purple" size="10rem"/></h1>
                <h1><MdAccessAlarm  color="red" size="10rem"/></h1>
                <Footer/>
            
        </div>
    );
}

export default Home;