import '../App.css';
import Logo from './Logo';
import Hamburger from './Hamburger';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function BookSalon() {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract id and booking ID from route parameters and location state respectively
    

    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "25px" }}>
            <div>
                <div style={{ position: "fixed", top: "0", left: "0" }}><Logo /></div>
                <div style={{ position: "fixed", top: "2vw", right: "6vh" }}><Hamburger /></div>
            </div>
            <div className='reschedule'>Are you really looking for Home salon services?</div>
            <div className='reschedule-buttons'>
                
                <button onClick={() => {
                    // Navigate to the salon page with Reschedule status and BookingID
                    navigate('/login');
                }} className='button-bookpage but-mob'>YES</button>
                <button onClick={() => { navigate(-1) }} className='button-reschedule'>NO</button>
            </div>
            
        </div>
    );
}

export default BookSalon;
