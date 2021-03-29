import React from 'react';
import Button from '@material-ui/core/Button';
import { FaAmazon } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";
import Navbar from "../js/components/Navbar";
import Test from '../js/components/Test';

function Home(props) {
    return (
        <div className="container">
            
            Home
            <Button variant="contained" color="primary">
             Hello World
            </Button>
            <h1><FaAmazon color="purple" size="10rem"/></h1>
            <h1><MdAccessAlarm  color="red" size="10rem"/></h1>
            <Test/>

        </div>
    );
}

export default Home;
