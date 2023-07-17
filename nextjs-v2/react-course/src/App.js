import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Todos from "./component/Todos";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/new" element={<Favorites />} />
          <Route path="/favorites" element={<NewMeetup />} />
          <Route path="/todo" element={<Todos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
