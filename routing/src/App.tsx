import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";


const App = () => {
    return (
        <div>
            <SideNav />

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default App;