import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/home";
import { Page1 } from "./Pages/page1";
import { Link } from "react-router-dom";
import { Users } from "./Components/Users";
import { UserDetails } from "./Components/UserDetails";
import { Admin } from "./Components/Admin";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/page1">Go to Page 1</Link> |{" "}
        <Link to="/">Go to Home page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
