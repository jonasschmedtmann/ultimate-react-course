import { Link } from "react-router-dom";
import PageNav from "../components1/PageNav";
import AppNav from "../components1/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">worldwise</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
