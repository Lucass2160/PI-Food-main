import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <div>
        <h1>FOODS</h1>
        <Link to="/home">
          <button className="button">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
