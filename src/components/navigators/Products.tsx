import { NavLink, Outlet } from "react-router-dom"
import navigationConfig from '../../config/navigationConfig.json'
import { Navigator } from './Navigator'

export const Products: React.FC = () => {
    const productItems = [navigationConfig["products"],
    { className: "navigator-list navigator-sublist" }
    ]
    return <div>        
            <Navigator navigatorItems={productItems} />        
        <Outlet />
    </div>
}