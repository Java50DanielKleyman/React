import { NavLink } from "react-router-dom"

type Props = {
    navigatorItems: Array<{ [key: string]: string }>
}
export const Navigator: React.FC<Props> = ({ navigatorItems }) => {
    return <nav>
        <ul className={navigatorItems[1].className}>
            {Object.entries(navigatorItems[0]).map((arr) =>
                <li className="navigator-item">
                    <NavLink to={arr[0]}>{arr[1]}</NavLink>
                </li>
            )}
        </ul>
    </nav>
}