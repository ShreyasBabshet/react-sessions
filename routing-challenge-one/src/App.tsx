import { useContext, useEffect } from "react";
import { AppContext, withAppProvider } from "./App.state";
import SideNav from "./components/SideNav/SideNav";
import { Outlet, useNavigate } from "react-router-dom";


const App = () => {
  const navigate = useNavigate();

  const appState = useContext(AppContext);
  if (!appState) return <></>;

  const { state, getUsers } = appState;

  useEffect(() => {
    getUsers();
  }, [])

  const onNavigate = (id: string) => {
    // console.log(id);
    // navigate to /id
    navigate(`/${id}`);
  }

  return (
    <div>
      <div>
        <SideNav 
          menuItems={state.users} 
          onNavigate={onNavigate}
        />
      </div>
      <main>
        {/* render profile pages here */}
        <Outlet />
      </main>
    </div>
  )
}

export default withAppProvider(App);
// <AppProvider><App /> </AppProvider>
// returns function that return a jsx -> Component
// export default App;