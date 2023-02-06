import { Link } from "react-router-dom"
import styles from "./Navigation.module.css"
const routes = [
    {
        url: "/",
        label: "Recipes"
    },
    {
        url: "/create",
        label: "Create Recipes"
    }
]
export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <h1>BiteMe</h1>
            <ul className={styles.list}>
                {routes.map((route) => {
                    return (
                        <li key={route.url}>
                            <Link to={route.url}>{route.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>)
}