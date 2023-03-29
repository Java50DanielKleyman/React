import { NavLink, Outlet } from "react-router-dom"
import navigationConfig from '../../config/navigationConfig.json'
import { Navigator } from './Navigator'

export const Products: React.FC = () => {
    const productItems = navigationConfig["products"]
    return <div>
        <nav>
            <ul className="navigator-list navigator-sublist">
                <Navigator navigatorItems={productItems}/>
            </ul>
        </nav>
        <Outlet />
    </div>
}