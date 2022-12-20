import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return <div className="Nav">
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
    </div>
}