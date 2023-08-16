import './Header.css'
import {Link, NavLink} from 'react-router-dom'
import Logo from "../assets/logo.png"
import { useSelector } from 'react-redux/es/hooks/useSelector'

export const Header = () => {
  const products = useSelector(state=> state.cartState.cartList)
  return (
   <header>
     <Link to='/' className='logo'>
     <img src={Logo} alt="shopmate logo" />
     <span>REDUX CART</span>
     </Link>
     <nav className='navigation'>
      <NavLink to='/' className='link'>Home</NavLink>
      <NavLink to='/cart' className='link'>Cart</NavLink>
     </nav>

     <Link to='/cart' className='items'> 
     <span>cart:{products.length}</span>
     </Link>

    </header>
    
  )
}
