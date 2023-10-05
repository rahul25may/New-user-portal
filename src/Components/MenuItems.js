import { NavLink } from 'react-router-dom';
import '../App.css';
// import Logo from './Logo'
// import TopNav from './TopNav';
import Header from './Header';
import '../Styles/Login.css';
// import Header from './Header';

// The MenuItems component renders navigation links.

function MenuItems() {
    return (
        <div>
            <Header />
            <div className='content'>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {/* Create navigation links for "Home," "Salons," "About us," and "Log out." */}
                    <NavLink to="/"><span style={{ color: "#FFF", fontSize: "30px" }}>Home</span></NavLink>
                    <NavLink to="/salons"><span style={{ color: "#FFF", fontSize: "30px" }}>Salons</span></NavLink>
                    <NavLink to="/aboutUs"><span style={{ color: "#FFF", fontSize: "30px" }}>About us</span></NavLink>
                    <NavLink to="/"><span style={{ color: "#FFF", fontSize: "30px" }}>Log out</span></NavLink>
                </div>
            </div>
        </div>
    );
}

export default MenuItems;
