import { Link, Outlet } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { HomePageProps } from "./HomePage.types.ts"

const HomePage = ({ }: HomePageProps) => {
    return (
        <div>
            <Link to="profile">Profile</Link> | <Link to="education">Education</Link>

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default HomePage 
