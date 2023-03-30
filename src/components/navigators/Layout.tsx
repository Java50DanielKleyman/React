import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import './navigators.css'
import navigationConfig from '../../config/navigationConfig.json'
import { Navigator } from './Navigator'

export const Layout: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/');
    }, []);
    const allItems = [navigationConfig["allitems"],
    { className: "navigator-list" }]
    return <div>        
            <Navigator navigatorItems={allItems} />        
        <Outlet />
    </div>
}