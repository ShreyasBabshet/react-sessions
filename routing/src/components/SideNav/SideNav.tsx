import { Link } from "react-router-dom";
import styles from "./SideNav.module.scss";
import { SideNavProps } from "./SideNav.types.ts"

const SideNav = ({ }: SideNavProps) => {
    return (
        <div>
            <p><Link to="/home">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/contact">Contact</Link></p>
        </div>
    )
}

export default SideNav;