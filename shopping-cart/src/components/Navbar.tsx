import {Link} from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { useGlobalContext } from '../context/Context';


const Navbar = () => {
    const {amount , setIsOpen} = useGlobalContext()
return (
    <nav className="nav-container">
        <div className="nav-center">
            <Link to={'/'} className='logo'>InnoCraft </Link>
            <div className='links-container'>
                <Link className='link' to={'/'}>Home</Link>
                <Link className='link' to={'/store'}>Store</Link>
                <Link className='link' to={'/about'}>About</Link>
            </div>
            <div onClick={()=>{setIsOpen(true)}} className='icon-container'>
                <span className='cart-icon'><FaCartShopping/></span>
                <span className='cart-number'>{amount}</span>
            </div>
        </div>
    </nav>
)
}

export default Navbar