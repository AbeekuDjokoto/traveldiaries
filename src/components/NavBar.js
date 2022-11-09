import NavLogo from "../assets/globe.svg"

const NavBar = () => {
    return ( 
        <nav>
            <img src={NavLogo} alt="globe logo" />
            <h1>my travel journal.</h1>
        </nav>
     );
}
 
export default NavBar;