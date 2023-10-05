import React from 'react';
import '../App.css';
import LinkedInIcon from '../images/linked-in.svg'
import Twitter from '../images/twitter.svg'
import InstagramIcon from '../images/instagram.svg'
import PlaceMarker from '../images/place-marker.svg'
import GmailLogo from '../images/gmail-logo.svg'
import WhatsApp from '../images/whats-app.svg'
import { useBlur } from '../context/blurContext';

function Footer() {
    const { isBlur } = useBlur();

    const socialMediaLinks = {
        linkedIn: 'https://www.linkedin.com/company/groomer-official/',
        instagram: 'https://instagram.com/groomer_official?igshid=MzRlODBiNWFlZA==',
        twitter: 'https://twitter.com/Groomersalons?t=ig4dNk-2WmEVJNOOsbflDg&s=08',
    };

    return (
        <div style={{ filter: isBlur ? 'blur(10px)' : 'none' }} className="footer">
            <div className='footer1' style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div className='footer-content' style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <div className='groomerLive'><b>Groomer.live</b></div>
                    <div className='groomerInfo'>
                        <div>
                            <img style={{ position: "relative", marginRight: "5px" }} src={GmailLogo} alt="gmail" />
                            <span>Groomer.online@gmail.com</span>
                        </div>
                        <div>
                            <img style={{ position: "relative", marginRight: "5px" }} src={WhatsApp} alt="whatsapp" />
                            <span>+91 9876543210</span>
                        </div>
                        <div>
                            <img style={{ position: "relative", marginRight: "5px" }} src={PlaceMarker} alt="location" />
                            Hi-tech city, Hyderabad.
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <a href={socialMediaLinks.linkedIn}>
                                <img style={{ transform: "scale(0.7)" }} src={LinkedInIcon} alt="linkedIn" />
                            </a>
                            <a href={socialMediaLinks.twitter}>
                                <img style={{ transform: "scale(0.7)" }} src={Twitter} alt="twitter" />
                            </a>
                            <a href={socialMediaLinks.instagram}>
                                <img style={{ transform: "scale(0.7)" }} src={InstagramIcon} alt="instagram" />
                            </a>
                        </div>
                    </div>
                    <div className='termsConditions'>
                        <div>Terms and Conditions</div>
                        <div>Privacy and Policy</div>
                    </div>
                </div>
                <div className='termsandConditions'>
                    <div>Terms and Conditions</div>
                    <div>Privacy and Policy</div>
                </div>
                <div style={{ textAlign: "center", fontSize: "10px" }}>
                    Copy right ©2023 groomer.live pvt limited. All the rights are reserved ®grooomer.live.
                </div>
            </div>
        </div>
    );
}

export default Footer;
