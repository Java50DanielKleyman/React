import { NavLink, Outlet } from "react-router-dom"
import navigationConfig from '../../config/navigationConfig.json'
import { Navigator } from './Navigator'

export const Products: React.FC = () => {
    const products = navigationConfig["/Products"]
    return <div>
        <nav>
            <ul className="navigator-list navigator-sublist">
                <Navigator navigatorItems={products}/>
            </ul>
        </nav>
        <Outlet />
    </div>
}