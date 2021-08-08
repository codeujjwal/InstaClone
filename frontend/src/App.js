import "./App.css";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import SignUp from "./components/screens/SignUp";
import Profile from "./components/screens/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;
