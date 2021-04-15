import React from 'react';
import styled from 'styled-components';

function Footer(props) {
    return (

        <FooterContainer>
        
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
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
    color:white;
    background:var(--mainBlue);

`;