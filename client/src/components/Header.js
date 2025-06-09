import {Link} from "react-router-dom"

const Header = ()=>{
    return(
    <div className="header">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqM4xQEd7MGAChL1FlmJ5ffix4qf1MB3aaWA&s" alt="title-logo"></img>
        <div className="header-action">
            <Link to="/" className="link">Home</Link>
            <Link to="/about-us" className="link">About Us</Link>
        </div>
    </div>
    )
}

export default Header