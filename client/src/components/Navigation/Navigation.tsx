import { Link } from "react-router-dom"
const routes = [
    {
        url: "/",
        name: "Recipes"
    },
    {
        url: "/create",
        name: "Create Recipes"
    }
]
export default function Navigation() {
    return (
        <nav>
            <ul>
                {routes.map((route) => {
                    return (
                        <li key={route.url}>
                            <Link to={route.url}>{route.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>)
}