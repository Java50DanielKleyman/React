import { NavLink } from "react-router-dom"

type Props = {
    navigatorItems: { [key: string]: string }
}
export const Navigator: React.FC<Props> = ({ navigatorItems }) => {
    return <>{Object.entries(navigatorItems).map((arr) =>
        <li className="navigator-item">
            <NavLink to={`arr[0]`}>{arr[1]}</NavLink>
        </li>
    )}</>
}