import '../App.css';
import '../Styles/Login.css';
import { useState, useEffect } from 'react';
import Header from './Header';

function Login() {
    const [islogined, setIslogined] = useState(false);
    const [status, setStatus] = useState('login');
    const [isMobileView, setIsMobileView] = useState(false);

    // useEffect to handle window resize and determine mobile view
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        // Initial check and event listener setup
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCheckNumber();
    }

    // State for mobile number input and registration status
    const [mobileNumber, setMobileNumber] = useState('');
    const [isMobileNumberRegistered, setIsMobileNumberRegistered] = useState(false);

    const handleCheckNumber = () => {
        // Simulating the check by comparing with a stored mobile number
        const storedMobileNumber = '1234567890';

        if (mobileNumber === storedMobileNumber) {
            setIsMobileNumberRegistered(true);
        } else {
            setIsMobileNumberRegistered(false);
            setIslogined(true);
        }
    };
    const loadScript = () => {
        const script = document.createElement("script");
        script.src = "https://otpless.com/auth.js";
        script.id = "otplessIdScript"
        document.body.appendChild(script);
      }
    useEffect(() => {
      
      loadScript()
      window.otpless = (otplessUser) => {
         
        console.log(otplessUser)
      };
      return () => {
        let scr = document.getElementById('otplessIdScript')
        document.body.removeChild(scr);
      };
    }, []);
  

    return (
        <>
           <Header/>
            <div class="container11">
                
            
                <div id='otpless-login-page' >
                   Login From here
                </div>
            </div>
            

        </>
       
        
    );
}

export default Login;
