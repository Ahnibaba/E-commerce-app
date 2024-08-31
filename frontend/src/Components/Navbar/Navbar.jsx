import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useContext, useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext"
import nav_dropdown from "../Assets/down-chevron.png"

const Navbar = () => {
   const [menu, setMenu] = useState("/shop") 

   const { pathname } = useLocation()
   const { getTotalCartItems } = useContext(ShopContext)
   const menuRef = useRef()

   const dropdown_toggle = (e) =>  {
      menuRef.current.classList.toggle("nav-menu-visible")
      e.target.classList.toggle("open")
   }
   
   
   useEffect(() => {
      if (pathname === "/") {
         setMenu("/shop")
      } else {
         setMenu(pathname)
      }
   }, [pathname])
   
   
   

  
  return (
    <div className="navbar">
       <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
       </div> 
       <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
       <ul ref={menuRef} className="nav-menu">
          <li onClick={() => setMenu("/shop")}><Link style={{textDecoration:"none"}} to="/">Shop{menu === "/shop" ? <hr /> : <></>}</Link></li>
          <li onClick={() => setMenu("/men")}><Link style={{textDecoration:"none"}} to="/men">Men{menu === "/men" ? <hr /> : <></>}</Link></li>
          <li onClick={() => setMenu("/women")}><Link style={{textDecoration:"none"}} to="/women">Women{menu === "/women" ? <hr /> : <></>}</Link></li>
          <li onClick={() => setMenu("/kids")}><Link style={{textDecoration:"none"}} to="/kids">Kids{menu === "/kids" ? <hr /> : <></>}</Link></li>
       </ul>
       <div className="nav-login-cart">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/cart"><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">
            {getTotalCartItems()}
          </div>
       </div>
    </div>
  )
}

export default Navbar