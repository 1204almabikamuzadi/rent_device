import React from 'react';
import styled from 'styled-components';
import lap1 from '../../images/lap1.jpg';
import { FaAmazon,FaFacebookSquare,FaRss,FaTwitter,FaAt } from "react-icons/fa";

function Footer(props) {
    return (

        <FooterContainer>
        
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>BRUSSELS</li>
                            <li>Association street</li>
                            <li>32/k23</li>
                            <li>Phone:02222222</li>
                        </ul>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>HEURES D'OUVERTURE</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>INSCRIPTION NEWS LETTER</h4>
                        <ul className="list-unstyled">
                            <li>img</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>SUIVEZ NOUS</h4>
                        <ul className="list-unstyled">
                            <li><FaFacebookSquare color="blue"/></li>
                            <li><FaRss color="orange"/></li>
                            <li><FaTwitter color="blue"/></li>
                            <li><FaAt color="grey" /></li>
                        </ul>

                    </div>
                </div>
                {/* Footer-bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Rent device-All Rights Reserved
                    </p>
                </div>
            </div>
            
            </div>   

        </FooterContainer>
    );
}

export default Footer;
const FooterContainer=styled.footer`
    color:var(--mainWhite);
    background:var(--mainDark);
    padding-top:3rem;
    margin-top:1px;

    .footer-bottom {
        padding-top:3rem;
        padding-bottom:2rem 
    }

`;