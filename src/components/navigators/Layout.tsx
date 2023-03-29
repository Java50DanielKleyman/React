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
    const allItems = navigationConfig["allitems"];
    return <div>
        <nav>
            <ul className="navigator-list">
                <Navigator navigatorItems={allItems} />
            </ul>
        </nav>
        <Outlet />
    </div>
}