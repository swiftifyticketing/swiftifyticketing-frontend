import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <section className="footer">
            <hr className="footer-seperator" />
            <section className="footer-social-media">
                
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                <img className='footer-social-media__icon' alt='logo' src='public\..\STIcon.png' />
                
                    <section className="footer-info__name">
                    </section>
                    <section className="footer-info__returns">
                    </section>
                </section>
                <section className="footer-info-center">
               
                    <section className="footer-info__terms">
                    <h4 className='swift'>SwiftifyTicketing</h4>
                    Terms and Conditions 
                        <br></br>
                        Copyright 2022 
                        <br></br>
                        All rights reserved
                    </section>
                </section>
                <section className="footer-info-right">
                    <section className="footer-info__number">
                        <h4 className='swift'> Contact Us:
                            <a className="fas fa-envelope-square" href="mailto:swiftifyticketing@gmail.com"></a> |
                            <a className="fab fa-github" href="https://github.com/swiftifyticketing"></a> |
                            <a href="https://www.facebook.com/SwiftifyTicketing-112132488145860" className="fab fa-facebook-square"></a>
                        </h4>
                    </section>
                    <section className="footer-info__contact">

                        <br />

                    </section>
                </section>
            </section>
            <hr className="footer-seperator" />
        </section>
    )
}

export default Footer
