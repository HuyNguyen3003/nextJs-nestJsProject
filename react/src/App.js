import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/layout";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/new">
            <NewMeetup />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
