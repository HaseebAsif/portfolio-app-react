import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="about">Click to view our about page</Link>
      <Link to="/">Click to view our home page</Link>
    </div>
  );
};

export default Home;
