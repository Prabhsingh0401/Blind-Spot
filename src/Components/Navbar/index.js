import './index.scss'
import Home from '../Home'

const Navbar = () => {
    return(
        <>
        <div className='Navbar'>
        <nav>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <ul>
            <li><a class="active" href={Home}>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
        </div>
        </>
    )
}

export default Navbar;