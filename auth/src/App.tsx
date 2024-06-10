import { Link, Outlet } from "react-router-dom";
import { withAuthProvider } from "./Auth.context";


const App = () => {
  return <>
    <p>APP</p>
    <div>
      <Link to="login">login</Link>
      <Link to="home" replace>Dashboard</Link>
    </div>
    <Outlet />
  </>
}

export default withAuthProvider(App);