import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <section className="footer">
        <hr className="footer-seperator" />
        <section className="footer-social-media">
        <img className='footer-social-media__icon' alt='logo' src='public\..\STIcon.png' />
        
        </section>
        
        
        <section className="footer-info">
          <section className="footer-info-left">
          <h4 className='swift'>Contact Us</h4> 
            <section className="footer-info__name">
            
            <a className="fas fa-envelope-square" href="mailto:varoujan.makdesian.314@my.csun.edu"></a> |
            <a className="fab fa-linkedin"href="https://www.linkedin.com/in/varoujan-makdesian-9b5857187/"></a> |
            <a href="https://www.facebook.com/SwiftifyTicketing-112132488145860" className="fab fa-facebook-square"></a> 
            </section>
            <section className="footer-info__returns">

              <br />
              
            </section>        
          </section>
          <section className="footer-info-center">
            <h4 className='swift'>SwiftifyTicketing</h4>
            <section className="footer-info__terms">
              Terms and Conditions
              <br />
              Copyright 2022
              <br />
              All rights reserved
            </section>
          </section>
          <section className="footer-info-right">
            <section className="footer-info__number">
              
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
