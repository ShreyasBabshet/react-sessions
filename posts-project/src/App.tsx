import { useEffect, useReducer } from "react";
import PostList from "./components/PostList/PostList";
import { appReducer, initialState, withDispatch } from "./App.state";
import Loader from "./components/Loader/Loader";


const App = () => {

  const [{ posts, showLoader }, dispatch] = useReducer(appReducer, initialState);
  const { getPosts } = withDispatch(dispatch);

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      {showLoader && <Loader />}

      <PostList
        posts={posts}
      />
    </>
  )

}

export default App;