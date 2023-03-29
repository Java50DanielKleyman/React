import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import './navigators.css'

export const Layout: React.FC = () => {
     const navigate = useNavigate(); 
  
  useEffect(() => {
   navigate('/');
  }, []);
    return <div>
        <nav>
            <ul className="navigator-list">
                <li className="navigator-item">
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink to='/orders'>Orders</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink to='/customers'>Customers</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink to='/shoppingcart'>ShoppingCart</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink to='/Products'>Products</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
}